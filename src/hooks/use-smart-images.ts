import { useEffect } from "react";

/**
 * Globally upgrades every <img> on the page with intelligent loading defaults
 * without requiring per-image refactors:
 *  - decoding="async" (offloads decode from main thread)
 *  - loading="lazy" for off-screen images (skips ones near top of viewport)
 *  - fetchpriority="high" for the first/largest above-the-fold image (LCP hint)
 *  - smooth fade-in once loaded (no layout shift since we don't change size)
 *
 * Also watches for dynamically-inserted <img> nodes via MutationObserver.
 */
export function useSmartImages() {
  useEffect(() => {
    if (typeof document === "undefined") return;

    const FADE_CLASS = "smart-img-fade";
    const READY_CLASS = "smart-img-ready";

    // Inject a tiny stylesheet once for the fade-in
    if (!document.getElementById("smart-img-style")) {
      const style = document.createElement("style");
      style.id = "smart-img-style";
      style.textContent = `
        img.${FADE_CLASS} { opacity: 0; transition: opacity 600ms ease-out; }
        img.${FADE_CLASS}.${READY_CLASS} { opacity: 1; }
      `;
      document.head.appendChild(style);
    }

    const markReady = (img: HTMLImageElement) => {
      img.classList.add(READY_CLASS);
    };

    const enhance = (img: HTMLImageElement) => {
      if (img.dataset.smart === "1") return;
      img.dataset.smart = "1";

      // Async decode is always safe
      if (!img.hasAttribute("decoding")) img.decoding = "async";

      // Decide eager vs lazy based on viewport position
      const rect = img.getBoundingClientRect();
      const viewportH = window.innerHeight || 800;
      const isAboveFold = rect.top < viewportH * 1.1 && rect.bottom > 0;

      if (!img.hasAttribute("loading")) {
        img.loading = isAboveFold ? "eager" : "lazy";
      }

      if (!img.hasAttribute("fetchpriority")) {
        // Hint high priority to the largest above-the-fold image we see
        if (isAboveFold && rect.width * rect.height > 60000) {
          img.setAttribute("fetchpriority", "high");
        } else if (!isAboveFold) {
          img.setAttribute("fetchpriority", "low");
        }
      }

      // Fade-in when it actually finishes loading
      if (img.complete && img.naturalWidth > 0) {
        markReady(img);
      } else {
        img.classList.add(FADE_CLASS);
        img.addEventListener("load", () => markReady(img), { once: true });
        img.addEventListener("error", () => markReady(img), { once: true });
      }
    };

    // Initial pass
    document.querySelectorAll<HTMLImageElement>("img").forEach(enhance);

    // Watch for new images
    const mo = new MutationObserver((mutations) => {
      for (const m of mutations) {
        m.addedNodes.forEach((node) => {
          if (node instanceof HTMLImageElement) {
            enhance(node);
          } else if (node instanceof HTMLElement) {
            node.querySelectorAll?.<HTMLImageElement>("img").forEach(enhance);
          }
        });
      }
    });
    mo.observe(document.body, { childList: true, subtree: true });

    return () => mo.disconnect();
  }, []);
}
