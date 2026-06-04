import { useEffect, useState } from "react";
import logo from "@/assets/trendylocs-logo-global.png.asset.json";

const MESSAGES = [
  "Warming up the salon…",
  "Twisting the locs…",
  "Polishing the details…",
  "Almost ready…",
];

export function PageLoader() {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [msgIdx, setMsgIdx] = useState(0);

  useEffect(() => {
    if (typeof document === "undefined") return;
    // Lock scroll
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    let raf = 0;
    let start = performance.now();
    const minDuration = 900; // ms — feels intentional, not laggy

    const tick = (now: number) => {
      const elapsed = now - start;
      // Ease towards 90% while page loads
      const target = Math.min(90, (elapsed / minDuration) * 90);
      setProgress((p) => (p < target ? target : p));
      if (!document.body.dataset.ready) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    const msgInterval = setInterval(() => {
      setMsgIdx((i) => (i + 1) % MESSAGES.length);
    }, 700);

    const finish = () => {
      document.body.dataset.ready = "1";
      cancelAnimationFrame(raf);
      setProgress(100);
      setDone(true);
      setTimeout(() => {
        document.body.style.overflow = prev;
        setHidden(true);
      }, 450);
    };

    if (document.readyState === "complete") {
      setTimeout(finish, Math.max(0, minDuration - (performance.now() - start)));
    } else {
      const onLoad = () =>
        setTimeout(finish, Math.max(0, minDuration - (performance.now() - start)));
      window.addEventListener("load", onLoad, { once: true });
      // Hard cap
      const cap = setTimeout(finish, 5000);
      return () => {
        window.removeEventListener("load", onLoad);
        clearTimeout(cap);
        clearInterval(msgInterval);
        cancelAnimationFrame(raf);
        document.body.style.overflow = prev;
      };
    }

    return () => {
      clearInterval(msgInterval);
      cancelAnimationFrame(raf);
      document.body.style.overflow = prev;
    };
  }, []);

  if (hidden) return null;

  return (
    <div
      aria-hidden={done}
      role="status"
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-dark text-primary-foreground transition-opacity duration-500 ${
        done ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <img
        src={logo.url}
        alt=""
        width={72}
        height={72}
        className="h-16 w-16 object-contain mb-6 animate-pulse"
      />
      <div className="text-[11px] tracking-[0.32em] text-primary-foreground/70 mb-6">
        TRENDYLOCS
      </div>

      <div className="w-64 h-[3px] bg-primary-foreground/15 rounded-full overflow-hidden">
        <div
          className="h-full bg-gold transition-[width] duration-300 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="mt-4 text-xs text-primary-foreground/60 h-4 min-w-[200px] text-center">
        {MESSAGES[msgIdx]}
      </div>
    </div>
  );
}
