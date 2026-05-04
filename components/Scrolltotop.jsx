// "use client";

// import { useEffect } from "react";
// import { usePathname } from "next/navigation";

// export default function ScrollToTop() {
//   const pathname = usePathname();

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [pathname]);

//   return null;
// }


"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * ScrollToTop
 *
 * - Sets `history.scrollRestoration = "manual"` so the browser never
 *   tries to restore the old scroll position after a refresh or navigation.
 * - Scrolls to (0, 0) whenever the pathname changes (page navigation).
 *   The home-page video's scroll lock then takes over from there.
 */
export default function ScrollToTop() {
  const pathname = usePathname();

  // Run once on mount — disable browser's auto scroll-restore
  useEffect(() => {
    if (typeof window !== "undefined" && "scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
  }, []);

  // Run on every route change
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return null;
}