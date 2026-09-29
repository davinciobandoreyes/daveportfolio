"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { sendTrack } from "@/lib/track-client";

export function AnalyticsBeacon() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const search = searchParams.toString();

  useEffect(() => {
    sendTrack({
      type: "pageview",
      path: pathname,
      search: search ? `?${search}` : "",
    });
  }, [pathname, search]);

  useEffect(() => {
    function onClick(event: MouseEvent) {
      const target = event.target;
      if (!(target instanceof Element)) return;
      const tracked = target.closest("[data-track]");
      if (!(tracked instanceof HTMLElement)) return;
      const name = tracked.dataset.track;
      if (!name || window.location.pathname.startsWith("/admin")) return;
      sendTrack({
        type: "click",
        path: window.location.pathname,
        eventName: name,
        search: window.location.search,
      });
    }

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
