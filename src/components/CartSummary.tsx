import { PackageCheck } from "lucide-react";
import { useCartStore } from "../stores/useCartStore";

export default function CartSummary() {
  const { cart } = useCartStore();
  const totalAmount = cart.reduce((sum, item) => sum + item.amount, 0);
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.amount, 0);

  return (
    <div className="rounded-2xl bg-slate-50 p-5 sm:p-6">
      <div className="mb-4 flex items-center gap-2 text-slate-700">
        <PackageCheck size={19} className="text-violet-600" />
        <h3 className="font-semibold">สรุปคำสั่งซื้อ</h3>
      </div>
      <div className="flex justify-between py-2 text-sm text-slate-600">
        <span>รวมทั้งหมด</span>
        <span>{totalAmount} ชิ้น</span>
      </div>
      <div className="mt-2 flex items-center justify-between border-t border-slate-200 pt-4">
        <span className="font-semibold text-slate-900">ราคารวมทั้งหมด</span>
        <span className="text-2xl font-bold text-violet-700">฿{totalPrice.toLocaleString("th-TH")}</span>
      </div>
    </div>
  );
}
