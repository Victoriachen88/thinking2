import { motion } from "motion/react";
import { ChevronRight } from "lucide-react";

const VIDEO_SRC =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260505_101331_74f9b798-3f00-4e86-8a01-377aa16ffeaa.mp4";

export default function Hero() {
  return (
    <section className="relative w-full max-w-[1400px] mx-auto rounded-[48px] bg-white border border-slate-200/50 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.03)] overflow-hidden h-[600px] flex flex-col">
      {/* Background video layer */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden select-none">
        <video
          className="w-full h-full object-cover scale-105 transition-transform duration-1000"
          src={VIDEO_SRC}
          autoPlay
          loop
          muted
          playsInline
        />
      </div>

      {/* Hero text content */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-20 flex-1 px-8 md:px-16 pt-12 md:pt-16 flex flex-col items-start"
      >
        <h1 className="font-serif text-[40px] md:text-[54px] font-medium tracking-[0.01em] text-[#0a1b33] leading-[1.32]">
          科学，我们的信仰
          <br />
          与追求
        </h1>
        <p className="mt-6 font-sans text-[14px] md:text-[15px] font-normal text-[#64748b] max-w-xl leading-[1.95] tracking-[0.01em]">
          李氏大药厂控股有限公司 — 香港联交所主板上市生物医药集团（股份代号：00950）。三十余年专注心脑血管、眼科与肿瘤领域的创新药研发与全球化布局，持续以科学驱动人类健康。
        </p>
        <motion.button
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.98 }}
          className="mt-8 bg-[#0a152d] text-white rounded-full px-7 py-3 text-[14px] font-medium transition-colors"
        >
          联系我们
        </motion.button>
      </motion.div>

      {/* Floating bottom navbar */}
      <motion.nav
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex items-center bg-white/90 backdrop-blur-2xl px-1.5 py-1.5 rounded-full shadow-[0_12px_40px_rgba(0,0,0,0.08)] border border-slate-200/40"
      >
        <div className="w-9 h-9 bg-white border border-slate-100 shadow-sm rounded-full flex items-center justify-center text-[#0a1b33] text-sm">
          ✦
        </div>
        <button className="ml-2 text-[12px] font-semibold text-slate-500 hover:text-[#0a1b33] px-3 py-2 transition-colors">
          关于我们
        </button>
        <button className="text-[12px] font-semibold text-slate-500 hover:text-[#0a1b33] px-3 py-2 transition-colors">
          业务领域
        </button>
        <button className="text-[12px] font-semibold text-slate-500 hover:text-[#0a1b33] px-3 py-2 transition-colors">
          新闻资讯
        </button>
        <button className="ml-1 flex items-center gap-1 bg-white px-5 py-2 rounded-full text-[12px] font-semibold text-[#0a1b33] border border-slate-200/60 shadow-sm hover:border-slate-300 transition-all">
          联系我们
          <ChevronRight className="w-3.5 h-3.5" />
        </button>
      </motion.nav>
    </section>
  );
}
