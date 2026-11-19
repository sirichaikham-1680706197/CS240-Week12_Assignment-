import { Minus, Plus, Trash2 } from "lucide-react";
import type { CartItem } from "../types";
import { useCartStore } from "../stores/useCartStore";

interface CartItemRowProps {
  item: CartItem;
}

export default function CartItemRow({ item }: CartItemRowProps) {
  const { changeAmount, removeFromCart } = useCartStore();
  const lineTotal = item.price * item.amount;

  const handleInput = (value: string) => {
    if (value === "") return;
    const n = Number(value);
    if (Number.isFinite(n) && n >= 1) changeAmount(item.id, Math.floor(n));
  };

  return (
    <div className="grid grid-cols-1 gap-4 py-5 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center">
      <div className="flex min-w-0 items-center gap-4">
        <img src={item.image} alt={item.name} className="h-20 w-20 shrink-0 rounded-xl object-cover" />
        <div className="min-w-0">
          <h3 className="truncate font-semibold text-slate-900">{item.name}</h3>
          <p className="mt-1 text-sm text-slate-500">฿{item.price.toLocaleString("th-TH")} / ชิ้น</p>
          <p className="mt-1 font-semibold text-violet-700">฿{lineTotal.toLocaleString("th-TH")}</p>
        </div>
      </div>

      <div className="flex items-center justify-between gap-3 sm:justify-end">
        <div className="flex items-center rounded-xl border border-slate-200 bg-white">
          <button
            type="button"
            aria-label={`ลดจำนวน ${item.name}`}
            onClick={() => changeAmount(item.id, Math.max(1, item.amount - 1))}
            disabled={item.amount <= 1}
            className="rounded-l-xl p-2.5 text-slate-600 hover:bg-slate-100 disabled:opacity-30"
          >
            <Minus size={16} />
          </button>
          <input
            aria-label={`จำนวน ${item.name}`}
            type="number"
            min={1}
            step={1}
            value={item.amount}
            onChange={(e) => handleInput(e.target.value)}
            onBlur={(e) => {
              if (e.target.value === "" || Number(e.target.value) < 1) changeAmount(item.id, 1);
            }}
            className="quantity-input w-12 border-x border-slate-200 py-2 text-center text-sm font-semibold outline-none"
          />
          <button
            type="button"
            aria-label={`เพิ่มจำนวน ${item.name}`}
            onClick={() => changeAmount(item.id, item.amount + 1)}
            className="rounded-r-xl p-2.5 text-slate-600 hover:bg-slate-100"
          >
            <Plus size={16} />
          </button>
        </div>
        <button
          type="button"
          aria-label={`ลบ ${item.name}`}
          onClick={() => removeFromCart(item.id)}
          className="rounded-xl p-2.5 text-rose-500 hover:bg-rose-50"
          title="ลบสินค้า"
        >
          <Trash2 size={18} />
        </button>
      </div>
    </div>
  );
}
