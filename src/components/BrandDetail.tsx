import { motion } from "motion/react";
import { ArrowLeft } from "lucide-react";
import type { Brand } from "../data/brands";

export default function BrandDetail({
  brand,
  onBack,
}: {
  brand: Brand;
  onBack: () => void;
}) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="relative w-full max-w-[1400px] mx-auto rounded-[48px] bg-white border border-slate-200/50 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.03)] overflow-hidden min-h-[520px] p-10 md:p-16 flex flex-col"
    >
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-[13px] text-slate-500 hover:text-[#0a1b33] transition-colors mb-10 w-fit"
      >
        <ArrowLeft className="w-4 h-4" /> 返回首页
      </button>

      <div
        className="h-1.5 w-16 rounded-full mb-7"
        style={{ background: brand.grad }}
      />
      <h1 className="font-serif text-[40px] md:text-[56px] font-medium text-[#0a1b33] leading-tight">
        {brand.name}
      </h1>
      <p className="mt-6 font-sans text-[15px] md:text-[16px] text-[#475569] max-w-2xl leading-[1.95] tracking-[0.01em]">
        {brand.desc}
      </p>

      <p className="mt-auto pt-12 text-[13px] text-slate-400 tracking-wide">
        李氏大药厂控股有限公司 · 网站运营演示页
      </p>
    </motion.section>
  );
}
