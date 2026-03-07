"use client";

export default function Footer() {
  return (
    <footer className="bg-[#f6ece1] px-8 py-16 md:px-16">
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-6 text-center">

        {/* Logo */}
        <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }} aria-label="Back to top">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 551.75 356.44" width={110} height={71}>
            <path fill="#000000" stroke="#fe6500" strokeMiterlimit="10" d="M538.19,78.19l-109.86,112.07,68.86,86.02c10.97,13.71,13.13,32.53,5.51,48.34-7.62,15.84-23.61,25.92-41.21,25.92h-101.89c-14.88,0-28.82-7.26-37.37-19.45l-24.22-34.48c-8.07,9.88-17.39,18.61-27.9,26.15-30.72,21.99-69.72,33.16-115.88,33.16-92.14,0-132.31-47.15-149.8-86.68-10.03-22.7-.1-49.28,22.39-59.85l76.07-35.7c6.14-2.87,12.77-4.32,19.42-4.32,5.89,0,11.78,1.12,17.34,3.4,9.14,3.76,16.73,10.33,21.76,18.66l29.05-153.74C194.5,16.14,213.37.5,235.36.5h83.74c13.69,0,26.69,6.14,35.34,16.76,2.82,3.45,5.08,7.24,6.75,11.25l13.53-14.04c8.61-8.91,20.49-13.96,32.91-13.96h97.9c18.41,0,35.01,11.05,42.15,28.01,7.13,16.96,3.38,36.54-9.5,49.69Z"/>
            <path fill="#f6ece1" d="M297.68,152.27l-2.01,10,2.03-10h-.02Z"/>
            <path fill="#f6ece1" d="M368.47,188.63l93.03,116.23h-101.9l-70.83-100.85-1.15,6.95c-6.52,33.36-21.25,58.27-44.15,74.67-22.9,16.4-52.66,24.6-89.27,24.6-54.46,0-90.47-19.8-107.99-59.43l76.07-35.7c3.13,8.48,7.67,14.57,13.61,18.25,5.94,3.68,14.09,5.54,24.43,5.54,25.64,0,40.37-9.7,44.13-29.1l30.9-163.58h83.73l-21.38,106.06h-.02l-2.01,10,111.95-116.06h97.93l-113.78,116.06-23.3,26.36Z"/>
          </svg>
        </a>

        {/* Copyright + tagline */}
        <p className="text-xs text-black/50">© 2026 All Rights Reserved</p>
        <p className="text-sm text-black/80">Deep expertise in AI implementation.</p>

        {/* Links */}
        <div className="flex gap-6 text-sm text-[#fe6500] font-medium">
          <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}>
            Back to Top
          </a>
          <a href="https://www.linkedin.com/in/justinkenna" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </div>

      </div>
    </footer>
  );
}
