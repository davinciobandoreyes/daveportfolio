export function Iphone16({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="iphone16">
      <div className="iphone16-chassis">
        <span className="iphone16-btn action" aria-hidden />
        <span className="iphone16-btn vol-up" aria-hidden />
        <span className="iphone16-btn vol-down" aria-hidden />
        <span className="iphone16-btn power" aria-hidden />
        <div className="iphone16-screen">
          {/* Native img keeps the original JPEG. Next/Image would re-encode. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={src} alt={alt} decoding="async" />
          <span className="iphone16-island" aria-hidden />
          <span className="iphone16-home" aria-hidden />
        </div>
      </div>
    </div>
  );
}
