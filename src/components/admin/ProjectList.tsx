"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  createProjectAction,
  deleteProjectAction,
  updateProjectMetaAction,
} from "@/app/admin/actions";
import type { Project } from "@/lib/types";

type Item = Pick<Project, "id" | "title" | "slug" | "client" | "published" | "sort">;

export function ProjectList({ projects }: { projects: Item[] }) {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [error, setError] = useState("");

  async function onCreate(event: React.FormEvent) {
    event.preventDefault();
    const result = await createProjectAction(title, slug);
    if (!result.ok) {
      setError(result.error);
      return;
    }
    router.push(`/admin/content/projects/${result.id}`);
  }

  return (
    <div className="admin-stack">
      <form className="admin-form admin-card" onSubmit={onCreate}>
        <h2>New project</h2>
        <div className="admin-grid">
          <label>
            Title
            <input value={title} onChange={(event) => setTitle(event.target.value)} required />
          </label>
          <label>
            Slug
            <input value={slug} onChange={(event) => setSlug(event.target.value)} required placeholder="project-name" />
          </label>
        </div>
        <button className="btn btn-primary" type="submit">
          Create
        </button>
        {error && <p className="form-status error">{error}</p>}
      </form>

      <ul className="admin-table">
        {projects.map((project) => (
          <ProjectRow key={project.id} project={project} />
        ))}
      </ul>
    </div>
  );
}

function ProjectRow({ project }: { project: Item }) {
  const router = useRouter();
  const [sort, setSort] = useState(project.sort);
  const [published, setPublished] = useState(project.published);
  const [error, setError] = useState("");

  async function onSave(event: React.FormEvent) {
    event.preventDefault();
    const result = await updateProjectMetaAction(project.id, Number(sort) || 0, published);
    setError(result.ok ? "" : result.error);
    if (result.ok) router.refresh();
  }

  async function onDelete() {
    if (!window.confirm(`Delete ${project.title}?`)) return;
    const result = await deleteProjectAction(project.id);
    if (!result.ok) {
      setError(result.error);
      return;
    }
    router.refresh();
  }

  return (
    <li>
      <form onSubmit={onSave}>
        <div>
          <Link href={`/admin/content/projects/${project.id}`}>
            <strong>{project.title}</strong>
          </Link>
          <p className="admin-hint">
            {project.client} · /work/{project.slug}
          </p>
        </div>
        <label>
          Sort
          <input type="number" value={sort} onChange={(event) => setSort(Number(event.target.value))} />
        </label>
        <label className="admin-check">
          <input type="checkbox" checked={published} onChange={(event) => setPublished(event.target.checked)} />
          Published
        </label>
        <button className="btn btn-secondary" type="submit">
          Save
        </button>
        <button className="btn btn-secondary" type="button" onClick={onDelete}>
          Delete
        </button>
      </form>
      {error && <p className="form-status error">{error}</p>}
    </li>
  );
}
