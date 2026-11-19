import { Link, useParams } from "react-router";
import { ArrowLeft, ShoppingCart } from "lucide-react";
import { products } from "../data/products";
import { useCartStore } from "../stores/useCartStore";

export default function ProductDetailPage() {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useCartStore();

  // ค่าจาก URL เป็น string เสมอ แต่ id ใน products เป็น number จึงต้องแปลงด้วย Number()
  const product = products.find((item) => item.id === Number(id));

  if (!product) {
    return (
      <div className="py-16 text-center">
        <p className="mb-2 text-xl font-semibold text-slate-800">ไม่พบสินค้า</p>
        <p className="mb-6 text-sm text-slate-500">ไม่มีสินค้ารหัส {id} ในระบบ</p>
        <Link
          to="/"
          className="rounded-xl bg-violet-600 px-5 py-3 text-sm font-semibold text-white hover:bg-violet-700"
        >
          กลับหน้าแรก
        </Link>
      </div>
    );
  }

  return (
    <div>
      <Link to="/" className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-violet-700">
        <ArrowLeft size={16} />
        กลับไปหน้าสินค้า
      </Link>

      <div className="grid overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm md:grid-cols-2">
        <img src={product.image} alt={product.name} className="h-72 w-full object-cover md:h-full" />
        <div className="flex flex-col justify-center p-7 sm:p-10">
          <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-violet-600">
            {product.category}
            {product.badge && <span className="ml-3 rounded-full bg-violet-100 px-3 py-1 normal-case">{product.badge}</span>}
          </p>
          <h1 className="mb-3 text-3xl font-bold text-slate-900">{product.name}</h1>
          <p className="mb-8 leading-7 text-slate-500">{product.description}</p>
          <p className="mb-6 text-3xl font-bold text-violet-700">฿{product.price.toLocaleString("th-TH")}</p>
          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => addToCart(product)}
              className="flex items-center gap-2 rounded-xl bg-violet-600 px-5 py-3 text-sm font-semibold text-white hover:bg-violet-700 focus:outline-none focus:ring-4 focus:ring-violet-200"
            >
              <ShoppingCart size={17} />
              Add to Cart
            </button>
            <Link
              to="/cart"
              className="rounded-xl border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50"
            >
              ไปที่ตะกร้า
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
