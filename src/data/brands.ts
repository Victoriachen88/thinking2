export interface Brand {
  key: string;
  name: string;
  grad: string;
  desc: string;
}

// 李氏大药厂生态品牌（用于首页跑马灯 + 点击进入的详情页）
export const BRANDS: Brand[] = [
  {
    key: "lees",
    name: "李氏大药厂",
    grad: "linear-gradient(135deg,#3b82f6,#1d4ed8)",
    desc: "李氏大药厂控股有限公司为香港联交所主板上市生物医药集团（股份代号：00950），1994 年成立，总部设于香港科学园，致力于心脑血管、眼科与肿瘤领域的创新药研发与全球化布局。",
  },
  {
    key: "zhaoke-pharm",
    name: "兆科药业",
    grad: "linear-gradient(135deg,#facc15,#f59e0b)",
    desc: "集团全资附属公司，位于安徽合肥，建有符合 GMP 规范的生产基地，承担核心药品的生产与制造，是集团产业化的重要支撑。",
  },
  {
    key: "zhaoke-eye",
    name: "兆科眼科",
    grad: "linear-gradient(135deg,#a855f7,#7c3aed)",
    desc: "集团眼科业务平台，专注眼科用药的研发与商业化，覆盖青光眼、干眼等治疗领域，持续拓展眼科创新管线。",
  },
  {
    key: "hefei",
    name: "合肥生产基地",
    grad: "linear-gradient(135deg,#22c55e,#16a34a)",
    desc: "位于安徽合肥，是集团核心 GMP 生产基地，支撑创新药与仿制药的规模化、高质量生产。",
  },
  {
    key: "nansha",
    name: "南沙生产基地",
    grad: "linear-gradient(135deg,#06b6d4,#0891b2)",
    desc: "位于广州南沙，进一步拓展集团产能与高端制造能力，服务全国及海外市场需求。",
  },
  {
    key: "hk-hq",
    name: "香港总部",
    grad: "linear-gradient(135deg,#ec4899,#e11d48)",
    desc: "集团总部设于香港科学园，统筹研发创新、资本运作与全球业务拓展，连接境内外资源。",
  },
  {
    key: "cv",
    name: "心脑血管",
    grad: "linear-gradient(135deg,#fb923c,#ea580c)",
    desc: "集团核心治疗领域之一，覆盖高血压、高血脂等慢病方向，布局创新药管线，服务广泛患者群体。",
  },
  {
    key: "eye-onco",
    name: "眼科 · 肿瘤",
    grad: "linear-gradient(135deg,#38bdf8,#0ea5e9)",
    desc: "眼科用药与抗肿瘤药物并重的重点布局领域，依托集团研发与产业化能力持���推进临床与商业化。",
  },
];
