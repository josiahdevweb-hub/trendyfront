import { useEffect, useRef, useState, type ImgHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type LazyImageProps = ImgHTMLAttributes<HTMLImageElement> & {
  wrapperClassName?: string;
  aspectClassName?: string;
};

/**
 * Lazy-loaded image with a soft blur-up + fade-in effect.
 * Uses native lazy loading + IntersectionObserver-friendly placeholder.
 */
export function LazyImage({
  src,
  alt = "",
  className,
  wrapperClassName,
  aspectClassName,
  loading = "lazy",
  decoding = "async",
  ...rest
}: LazyImageProps) {
  const [loaded, setLoaded] = useState(false);
  const ref = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const img = ref.current;
    if (img && img.complete && img.naturalWidth > 0) setLoaded(true);
  }, [src]);

  return (
    <div
      className={cn(
        "relative overflow-hidden bg-muted",
        aspectClassName,
        wrapperClassName,
      )}
    >
      {!loaded && (
        <div className="absolute inset-0 animate-pulse bg-gradient-to-br from-muted via-secondary to-muted" />
      )}
      <img
        ref={ref}
        src={src}
        alt={alt}
        loading={loading}
        decoding={decoding}
        onLoad={() => setLoaded(true)}
        className={cn(
          "transition-all duration-700 ease-out",
          loaded ? "opacity-100 blur-0 scale-100" : "opacity-0 blur-md scale-[1.02]",
          className,
        )}
        {...rest}
      />
    </div>
  );
}
