import type { ArtifactType, ProjectArtifact } from "@/lib/types";

const ARTIFACT_KIND: Record<ArtifactType, string> = {
  ux_artifact: "Insight",
  user_journey: "Journey",
  handmade_draft: "Draft",
  user_flow: "Flow",
  low_fi: "Low-fi",
  hi_fi: "Screen",
};

export function ArtifactGallery({ items }: { items: ProjectArtifact[] }) {
  if (!items.length) return null;

  const hasGroups = items.some((item) => item.group);
  if (!hasGroups) {
    return <ArtifactList items={items} showKind />;
  }

  const grouped = new Map<string, ProjectArtifact[]>();
  for (const item of items) {
    const key = item.group ?? "";
    const list = grouped.get(key) ?? [];
    list.push(item);
    grouped.set(key, list);
  }

  return (
    <div className="artifact-groups">
      {Array.from(grouped.entries()).map(([label, groupItems]) => (
        <div key={label || "ungrouped"} className="artifact-group">
          {label ? <h3 className="artifact-group-label">{label}</h3> : null}
          <ArtifactList items={groupItems} headingLevel="h4" />
        </div>
      ))}
    </div>
  );
}

function ArtifactList({
  items,
  showKind = false,
  headingLevel = "h3",
}: {
  items: ProjectArtifact[];
  showKind?: boolean;
  headingLevel?: "h3" | "h4";
}) {
  const Heading = headingLevel;

  return (
    <ul className="artifact-gallery">
      {items.map((item) => (
        <li key={item.id} className="artifact-item">
          {showKind && (
            <p className="artifact-kind">{ARTIFACT_KIND[item.type]}</p>
          )}
          {item.image_url ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={item.image_url} alt={item.title} />
          ) : (
            <div className="artifact-placeholder" aria-hidden>
              {ARTIFACT_KIND[item.type]}
            </div>
          )}
          <div>
            <Heading>{item.title}</Heading>
            {item.body && <p>{item.body}</p>}
          </div>
        </li>
      ))}
    </ul>
  );
}
