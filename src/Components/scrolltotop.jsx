import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible((window.scrollY || 0) > 250);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Scroll to top"
      className={`
        fixed bottom-7 right-7 z-[99999]
        h-16 w-16 rounded-full
        bg-white/90 border border-slate-200
        dark:bg-white/10 dark:border-white/20
        backdrop-blur-md shadow-xl
        flex items-center justify-center
        transition-all duration-300
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6 pointer-events-none"}
      `}
    >
      <ChevronUp
        className="h-7 w-7 text-slate-900 dark:text-white"
        strokeWidth={3}
      />
    </button>
  );
}