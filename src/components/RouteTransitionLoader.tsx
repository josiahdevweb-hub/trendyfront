import { useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import logo from "@/assets/trendylocs-logo-global.png";

/**
 * Lightweight inter-page transition loader.
 * Shows briefly while the router is in a "pending" state navigating
 * between routes. Hard-capped to 3s so it never blocks the UI.
 */
export function RouteTransitionLoader() {
  const isLoading = useRouterState({
    select: (s) => s.status === "pending" || s.isLoading || s.isTransitioning,
  });
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!isLoading) {
      if (visible) {
        setProgress(100);
        const t = setTimeout(() => {
          setVisible(false);
          setProgress(0);
        }, 250);
        return () => clearTimeout(t);
      }
      return;
    }

    setVisible(true);
    setProgress(10);
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const elapsed = now - start;
      // Ease toward 90% over ~2.5s
      const target = Math.min(90, (elapsed / 2500) * 90);
      setProgress((p) => (p < target ? target : p));
      if (elapsed < 3000) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    // Hard cap at 3s
    const cap = setTimeout(() => {
      setProgress(100);
      setTimeout(() => setVisible(false), 250);
    }, 3000);

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(cap);
    };
  }, [isLoading, visible]);

  if (!visible) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed inset-0 z-[90] flex flex-col items-center justify-center bg-dark/95 backdrop-blur-sm text-primary-foreground animate-fade-in"
    >
      <img
        src={logo}
        alt=""
        width={64}
        height={64}
        className="h-14 w-14 object-contain mb-5 animate-pulse"
      />
      <div className="text-[11px] tracking-[0.32em] text-primary-foreground/70 mb-5">
        TRENDYLOCS
      </div>
      <div className="w-56 h-[3px] bg-primary-foreground/15 rounded-full overflow-hidden">
        <div
          className="h-full bg-gold transition-[width] duration-300 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
