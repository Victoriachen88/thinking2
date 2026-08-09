import { motion } from "motion/react";

const LINKS = ["关于我们", "业务领域", "新闻资讯", "联系我们"];

export default function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-xl border-b border-slate-200/60"
    >
      <div className="max-w-[1400px] mx-auto h-16 px-6 md:px-10 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <span className="w-8 h-8 rounded-lg bg-[#0a152d] text-white flex items-center justify-center text-sm">
            ✦
          </span>
          <span className="font-serif text-[17px] font-medium text-[#0a1b33] tracking-wide">
            李氏大药厂
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-9">
          {LINKS.map((l) => (
            <a
              key={l}
              href="#"
              className="text-[14px] text-slate-500 hover:text-[#0a1b33] transition-colors"
            >
              {l}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <span className="hidden md:inline-flex items-center gap-1 text-[12px] text-slate-400 border border-slate-200 rounded-full px-3 py-1">
            中 / EN
          </span>
          <button className="bg-[#0a152d] text-white text-[13px] rounded-full px-4 py-2 hover:scale-105 transition-transform">
            联系我们
          </button>
        </div>
      </div>
    </motion.header>
  );
}
