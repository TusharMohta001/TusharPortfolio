import { useEffect } from "react";

export default function CustomCursor() {
  useEffect(() => {
    const cursor = document.getElementById("cursor");

    const moveCursor = (e) => {
      const x = e.clientX;
      const y = e.clientY;

      cursor.animate(
        {
          left: `${x}px`,
          top: `${y}px`,
        },
        {
          duration: 250,
          fill: "forwards",
          easing: "ease-out",
        }
      );
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <div
      id="cursor"
      className="
      hidden md:flex
        pointer-events-none
        fixed top-0 left-0 w-6 h-6
        -translate-x-1/2 -translate-y-1/2
        rounded-full border border-[#5271FF]
        dark:border-white/60
        backdrop-blur-sm
        shadow-[0_0_20px_rgba(82,113,255,0.6)]
        dark:shadow-[0_0_20px_rgba(255,255,255,0.4)]
        transition-all duration-150 
        z-[9999]
      "
    ></div>
  );
}
