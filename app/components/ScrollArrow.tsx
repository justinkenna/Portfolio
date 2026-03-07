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
    <div ref={wrapperRef} className="flex justify-center bg-black -mt-40">
      <svg
        width="70"
        height="160"
        viewBox="0 0 70 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          ref={pathRef}
          d="M 35 0 C 65 32 5 64 35 100 C 58 124 35 138 35 148"
          stroke="#fe6500"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          ref={chevronRef}
          d="M 23 140 L 35 156 L 47 140"
          stroke="#fe6500"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
    </div>
  );
}
