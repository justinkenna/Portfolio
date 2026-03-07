"use client";
import { useEffect, useRef } from "react";

export default function ScrollArrow() {
  const pathRef = useRef<SVGPathElement>(null);
  const chevronRef = useRef<SVGPathElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const path = pathRef.current;
    const chevron = chevronRef.current;
    const wrapper = wrapperRef.current;
    if (!path || !chevron || !wrapper) return;

    const lineLength = path.getTotalLength();
    const chevronLength = chevron.getTotalLength();

    path.style.strokeDasharray = `${lineLength}`;
    path.style.strokeDashoffset = `${lineLength}`;
    chevron.style.strokeDasharray = `${chevronLength}`;
    chevron.style.strokeDashoffset = `${chevronLength}`;

    const onScroll = () => {
      const rect = wrapper.getBoundingClientRect();
      const triggerStart = window.innerHeight - 100;
      const triggerEnd = window.innerHeight - 500;
      const progress = Math.min(1, Math.max(0,
        (triggerStart - rect.top) / (triggerStart - triggerEnd)
      ));

      path.style.strokeDashoffset = `${lineLength * (1 - progress)}`;

      // Chevron draws in during the last 20% of scroll progress
      const chevronProgress = Math.min(1, Math.max(0, (progress - 0.8) / 0.2));
      chevron.style.strokeDashoffset = `${chevronLength * (1 - chevronProgress)}`;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div ref={wrapperRef} className="flex justify-center bg-black py-2">
      <svg
        width="36"
        height="80"
        viewBox="0 0 36 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          ref={pathRef}
          d="M 18 0 C 33 16 3 32 18 50 C 29 62 18 69 18 74"
          stroke="#fe6500"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          ref={chevronRef}
          d="M 10 68 L 18 78 L 26 68"
          stroke="#fe6500"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
    </div>
  );
}
