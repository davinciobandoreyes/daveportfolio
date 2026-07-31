import type { ProjectArtifact } from "@/lib/types";

export function ArtifactGallery({ items }: { items: ProjectArtifact[] }) {
  if (!items.length) return null;

  return (
    <ul className="artifact-gallery">
      {items.map((item) => (
        <li key={item.id} className="artifact-item">
          {item.image_url ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={item.image_url} alt={item.title} />
          ) : (
            <div className="artifact-placeholder" aria-hidden>
              {item.type.replaceAll("_", " ")}
            </div>
          )}
          <div>
            <h3>{item.title}</h3>
            {item.body && <p>{item.body}</p>}
          </div>
        </li>
      ))}
    </ul>
  );
}
