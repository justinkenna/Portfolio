"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

export default function ParallaxShapes() {
  const shape2Ref = useRef<HTMLDivElement>(null);
  const oRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const viewportH = window.innerHeight;
      const progress = 1 - (rect.bottom / (viewportH + rect.height));

      if (shape2Ref.current) {
        shape2Ref.current.style.transform = `translateY(${progress * -50}px) rotate(${progress * -14}deg)`;
      }
      if (oRef.current) {
        oRef.current.style.transform = `translateY(${progress * -40}px) rotate(${progress * 16}deg)`;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={sectionRef} className="flex gap-8 items-center justify-center">
      <div ref={shape2Ref} className="will-change-transform opacity-80">
        <Image src="/assets/SVG/Shape2.svg" alt="" width={200} height={200} />
      </div>
      <div ref={oRef} className="will-change-transform text-[#fe6500]">
        <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="42" stroke="currentColor" strokeWidth="8"/>
        </svg>
      </div>
    </div>
  );
}
