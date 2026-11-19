import { Link } from "react-router";

export default function NotFoundPage() {
  return (
    <div className="py-16 text-center">
      <h1 className="text-8xl font-bold text-violet-600">404</h1>
      <p className="mt-4 text-2xl font-bold text-slate-900">Page Not Found</p>
      <p className="mt-2 mb-8 text-sm text-slate-500">ไม่พบหน้าที่คุณต้องการ</p>
      <Link
        to="/"
        className="rounded-xl bg-violet-600 px-5 py-3 text-sm font-semibold text-white hover:bg-violet-700"
      >
        กลับหน้าแรก
      </Link>
    </div>
  );
}
