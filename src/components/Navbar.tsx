import { Link, NavLink } from "react-router";
import { ShoppingBag } from "lucide-react";
import { useCartStore } from "../stores/useCartStore";

const linkClass = ({ isActive }: { isActive: boolean }) =>
  `inline-flex items-center gap-2 border-b-2 px-1 py-1.5 text-sm font-semibold transition ${
    isActive
      ? "border-violet-600 text-violet-700"
      : "border-transparent text-slate-500 hover:text-slate-900"
  }`;

export default function Navbar() {
  const { cart } = useCartStore();

  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 lg:px-8">
        <Link to="/" className="flex items-center gap-2 text-xl font-bold tracking-tight text-slate-900">
          <span className="rounded-xl bg-violet-600 p-2 text-white">
            <ShoppingBag size={20} />
          </span>
          Tech<span className="text-violet-600">Store.</span>
        </Link>

        <nav className="flex items-center gap-5 sm:gap-7">
          <NavLink to="/" end className={linkClass}>
            Home
          </NavLink>
          <NavLink to="/cart" className={linkClass}>
            Cart
            {cart.length > 0 && (
              <span className="rounded-full bg-violet-600 px-2 py-0.5 text-xs font-semibold text-white">
                {cart.length}
              </span>
            )}
          </NavLink>
          <NavLink to="/about" className={linkClass}>
            About
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
