"use client";

type TrackInput = {
  type: "pageview" | "click";
  path: string;
  eventName?: string;
  search?: string;
};

export function sendTrack({ type, path, eventName, search }: TrackInput) {
  if (path.startsWith("/admin")) return;
  const params = new URLSearchParams(search ?? "");
  const body = {
    type,
    path,
    event_name: eventName ?? null,
    referrer: document.referrer,
    utm_source: params.get("utm_source"),
    utm_medium: params.get("utm_medium"),
    utm_campaign: params.get("utm_campaign"),
  };

  void fetch("/api/track", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
    keepalive: true,
  });
}

export function trackEvent(eventName: string) {
  sendTrack({
    type: "click",
    path: window.location.pathname,
    eventName,
    search: window.location.search,
  });
}
