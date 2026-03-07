import HeroSection from "./components/HeroSection";
import ParallaxShapes from "./components/ParallaxShapes";
import WorkCarousel from "./components/WorkCarousel";
import PortfolioAgent from "./components/PortfolioAgent";
import ContactSection from "./components/ContactSection";
import ScrollArrow from "./components/ScrollArrow";

export default function Home() {
  return (
    <main className="font-sans bg-black text-white">

      {/* ── Hero ── */}
      <HeroSection />

      {/* ── About ── */}
      <section className="bg-black px-8 pt-24 pb-5 md:px-16">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

          {/* Decorative shapes */}
          <ParallaxShapes />

          {/* Copy */}
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight text-white">
              Designing Intelligent Products That Balance User Value and Business Impact
            </h2>
            <p className="mt-6 text-sm leading-7 text-white/80">
              I design complex product systems that sit at the intersection of AI, search, and monetization.
            </p>
            <p className="mt-4 text-sm leading-7 text-white/80">
              My work focuses on helping users navigate information, evaluate choices, and take meaningful action. By combining research, experimentation, and product thinking, I design experiences that create value for both people and the businesses that serve them.
            </p>
          </div>

        </div>
      </section>

      {/* ── Scroll Arrow ── */}
      <ScrollArrow />

      {/* ── Selected Work ── */}
      <WorkCarousel />

      {/* ── Portfolio Agent ── */}
      <PortfolioAgent />

      {/* ── Contact ── */}
      <ContactSection />

    </main>
  );
}
