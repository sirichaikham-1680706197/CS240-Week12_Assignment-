import { Sparkles } from "lucide-react";
import ProductCard from "../components/ProductCard";
import { products } from "../data/products";

export default function HomePage() {
  return (
    <>
      <section className="mb-10 overflow-hidden rounded-3xl bg-slate-900 px-7 py-10 text-white sm:px-10 lg:py-14">
        <div className="max-w-2xl">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-violet-200">
            <Sparkles size={15} />
            เทคโนโลยีสำหรับทุกวัน
          </p>
          <h1 className="mb-4 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            Discover Your
            <br />
            <span className="text-violet-300">Next Favorite.</span>
          </h1>
          <p className="max-w-xl text-sm leading-7 text-slate-300 sm:text-base">
            เลือกชมสินค้าไอทีและอุปกรณ์เสริมที่คัดสรรมาเพื่อการทำงาน ความบันเทิง และไลฟ์สไตล์ของคุณ
          </p>
        </div>
      </section>

      <section>
        <div className="mb-7 flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="mb-1 text-sm font-semibold text-violet-600">OUR COLLECTION</p>
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">สินค้าแนะนำ</h2>
          </div>
          <p className="text-sm text-slate-500">ทั้งหมด {products.length} รายการ</p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </>
  );
}
