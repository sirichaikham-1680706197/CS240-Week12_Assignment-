import { Link } from "react-router";
import { ShoppingCart, Star } from "lucide-react";
import type { Product } from "../types";
import { useCartStore } from "../stores/useCartStore";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { name, description, price, image, category, badge } = product;
  const { addToCart } = useCartStore();

  return (
    <article className="product-card group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white">
      <Link to={`/product/${product.id}`} className="relative block overflow-hidden bg-slate-100">
        {badge && (
          <span className="absolute left-4 top-4 z-10 rounded-full bg-violet-600 px-3 py-1 text-xs font-semibold text-white">
            {badge}
          </span>
        )}
        <img
          src={image}
          alt={name}
          className="h-52 w-full object-cover transition duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </Link>

      <div className="flex flex-1 flex-col p-5">
        <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-violet-600">{category}</p>
        <h3 className="mb-2 text-lg font-semibold text-slate-900">
          <Link to={`/product/${product.id}`} className="hover:text-violet-700">
            {name}
          </Link>
        </h3>
        <p className="mb-5 flex-1 text-sm leading-6 text-slate-500">{description}</p>
        <div className="mb-4 flex items-center justify-between">
          <span className="text-xl font-bold text-slate-900">฿{price.toLocaleString("th-TH")}</span>
          <span className="flex items-center gap-1 text-sm text-amber-500">
            <Star size={15} fill="currentColor" />
            4.8
          </span>
        </div>
        <button
          type="button"
          onClick={() => addToCart(product)}
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-violet-700 focus:outline-none focus:ring-4 focus:ring-violet-200"
        >
          <ShoppingCart size={17} />
          Buy Now
        </button>
      </div>
    </article>
  );
}
