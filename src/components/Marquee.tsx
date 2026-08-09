import { BRANDS } from "../data/brands";
import type { Brand } from "../data/brands";

function BrandCard({
  brand,
  onSelect,
}: {
  brand: Brand;
  onSelect: (b: Brand) => void;
}) {
  return (
    <button
      onClick={() => onSelect(brand)}
      className="group relative h-24 w-40 shrink-0 flex items-center justify-center rounded-full bg-white border border-slate-200/60 shadow-sm hover:border-slate-300 transition-all overflow-hidden cursor-pointer"
    >
      <div
        className="absolute inset-0 opacity-0 scale-150 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300"
        style={{ background: brand.grad }}
      />
      <span className="relative z-10 flex flex-col items-center gap-1 px-2 text-center">
        <span className="text-[13px] font-semibold text-slate-500 group-hover:text-white transition-colors duration-300 leading-tight">
          {brand.name}
        </span>
        <span className="text-[10px] text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          查看 →
        </span>
      </span>
    </button>
  );
}

export default function Marquee({
  onSelect,
}: {
  onSelect: (b: Brand) => void;
}) {
  const loop = [...BRANDS, ...BRANDS];
  return (
    <div className="w-full max-w-[1400px] mx-auto mt-10 marquee-mask overflow-hidden">
      <div className="marquee-track gap-5">
        {loop.map((b, i) => (
          <BrandCard key={i} brand={b} onSelect={onSelect} />
        ))}
      </div>
    </div>
  );
}
