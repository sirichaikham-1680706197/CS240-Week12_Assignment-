import { Link } from "react-router";
import { ShoppingBasket } from "lucide-react";
import { useCartStore } from "../stores/useCartStore";
import CartItemRow from "./CartItemRow";
import CartSummary from "./CartSummary";

export default function Cart() {
  const { cart, clearCart } = useCartStore();

  const handleCheckout = () => {
    if (cart.length === 0) return;
    window.alert("ชำระเงินเรียบร้อยแล้ว ขอบคุณที่ใช้บริการ TechStore!");
    clearCart();
  };

  return (
    <section>
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="mb-1 text-sm font-semibold text-violet-600">YOUR SHOPPING</p>
          <h2 className="flex items-center gap-3 text-2xl font-bold text-slate-900 sm:text-3xl">
            Product Cart
            {cart.length > 0 && (
              <span className="rounded-full bg-violet-100 px-3 py-1 text-sm font-semibold text-violet-700">
                {cart.length} รายการ
              </span>
            )}
          </h2>
        </div>
        <span className="text-sm text-slate-500">ตรวจสอบสินค้าก่อนชำระเงิน</span>
      </div>

      <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
        {cart.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <div className="mb-4 rounded-2xl bg-violet-50 p-5 text-violet-600">
              <ShoppingBasket size={36} />
            </div>
            <h3 className="mb-2 text-lg font-semibold text-slate-800">ตะกร้าสินค้ายังว่างอยู่</h3>
            <p className="text-sm text-slate-500">กรุณาเลือก Product แล้วกด Buy Now เพื่อเพิ่มสินค้าลงตะกร้า</p>
            <Link
              to="/"
              className="mt-5 rounded-xl bg-violet-600 px-5 py-3 text-sm font-semibold text-white hover:bg-violet-700"
            >
              ไปเลือกสินค้า
            </Link>
          </div>
        ) : (
          <>
            <div className="divide-y divide-slate-100">
              {cart.map((item) => (
                <CartItemRow key={item.id} item={item} />
              ))}
            </div>
            <div className="mt-6 grid gap-5 lg:grid-cols-[1fr_360px] lg:items-end">
              <p className="text-sm leading-6 text-slate-500">ตรวจสอบจำนวนและรายการสินค้าให้เรียบร้อยก่อนกดชำระเงิน</p>
              <div className="space-y-4">
                <CartSummary />
                <button
                  type="button"
                  onClick={handleCheckout}
                  className="w-full rounded-xl bg-violet-600 px-5 py-3.5 font-semibold text-white hover:bg-violet-700 focus:outline-none focus:ring-4 focus:ring-violet-200"
                >
                  ชำระเงิน
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
