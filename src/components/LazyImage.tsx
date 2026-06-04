import { useEffect, useRef, useState, type ImgHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type LazyImageProps = ImgHTMLAttributes<HTMLImageElement> & {
  wrapperClassName?: string;
  aspectClassName?: string;
  /** When true, loads immediately (use for above-the-fold/LCP images). */
  priority?: boolean;
  /** Distance before viewport to start loading (default: 300px). */
  rootMargin?: string;
};

/**
 * Intelligently lazy-loaded image:
 * - Defers network request until near viewport (IntersectionObserver)
 * - `priority` opts out of lazy behavior for hero/LCP images
 * - Blur-up + fade-in placeholder
 * - Falls back gracefully if IO is unavailable
 */
export function LazyImage({
  src,
  alt = "",
  className,
  wrapperClassName,
  aspectClassName,
  priority = false,
  rootMargin = "300px",
  loading,
  decoding = "async",
  fetchPriority,
  ...rest
}: LazyImageProps) {
  const [inView, setInView] = useState(priority);
  const [loaded, setLoaded] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (inView) return;
    const el = wrapperRef.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setInView(true);
            io.disconnect();
            break;
          }
        }
      },
      { rootMargin },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [inView, rootMargin]);

  useEffect(() => {
    const img = imgRef.current;
    if (img && img.complete && img.naturalWidth > 0) setLoaded(true);
  }, [src, inView]);

  const effectiveLoading = loading ?? (priority ? "eager" : "lazy");
  const effectiveFetchPriority =
    fetchPriority ?? (priority ? "high" : "auto");

  return (
    <div
      ref={wrapperRef}
      className={cn(
        "relative overflow-hidden bg-muted",
        aspectClassName,
        wrapperClassName,
      )}
    >
      {!loaded && (
        <div className="absolute inset-0 animate-pulse bg-gradient-to-br from-muted via-secondary to-muted" />
      )}
      {inView && (
        <img
          ref={imgRef}
          src={src}
          alt={alt}
          loading={effectiveLoading}
          decoding={decoding}
          fetchPriority={effectiveFetchPriority}
          onLoad={() => setLoaded(true)}
          className={cn(
            "transition-all duration-700 ease-out",
            loaded
              ? "opacity-100 blur-0 scale-100"
              : "opacity-0 blur-md scale-[1.02]",
            className,
          )}
          {...rest}
        />
      )}
    </div>
  );
}
