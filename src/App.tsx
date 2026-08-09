import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import BrandDetail from "./components/BrandDetail";
import type { Brand } from "./data/brands";

export default function App() {
  const [active, setActive] = useState<Brand | null>(null);

  return (
    <>
      <Header />
      <main className="min-h-screen w-full py-10 px-4 flex flex-col items-center">
        {active ? (
          <BrandDetail brand={active} onBack={() => setActive(null)} />
        ) : (
          <>
            <Hero />
            <Marquee onSelect={(b) => setActive(b)} />
          </>
        )}
      </main>
    </>
  );
}
