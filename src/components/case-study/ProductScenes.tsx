import type { ProjectArtifact } from "@/lib/types";
import { Iphone16 } from "@/components/case-study/Iphone16";

function isIphoneShot(item: ProjectArtifact) {
  return item.device === "iphone-16" && Boolean(item.image_url);
}

export function ProductScenes({ items }: { items: ProjectArtifact[] }) {
  if (!items.length) return null;

  const grouped = new Map<string, ProjectArtifact[]>();
  for (const item of items) {
    const key = item.group ?? "";
    const list = grouped.get(key) ?? [];
    list.push(item);
    grouped.set(key, list);
  }

  return (
    <div className="product-scenes">
      {Array.from(grouped.entries()).map(([label, groupItems]) => (
        <div key={label || "ungrouped"} className="product-scene-group">
          {label ? <h3 className="artifact-group-label">{label}</h3> : null}
          <ul
            className={
              groupItems.every((item) => !item.image_url || isIphoneShot(item))
                ? "product-scene-list product-scene-phones"
                : "product-scene-list"
            }
          >
            {groupItems.map((item) => (
              <li
                key={item.id}
                className={
                  isIphoneShot(item)
                    ? "product-scene product-scene-phone"
                    : "product-scene"
                }
              >
                {item.image_url ? (
                  isIphoneShot(item) ? (
                    <Iphone16 src={item.image_url} alt={item.title} />
                  ) : (
                    <figure className="product-scene-frame">
                      {/* Native img keeps the original JPEG. Next/Image would re-encode. */}
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={item.image_url}
                        alt={item.title}
                        decoding="async"
                      />
                    </figure>
                  )
                ) : null}
                <div className="product-scene-copy">
                  <h4>{item.title}</h4>
                  {item.body && <p>{item.body}</p>}
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
