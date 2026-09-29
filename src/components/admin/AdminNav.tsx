"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type Item = {
  href: string;
  label: string;
  exact?: boolean;
};

export function AdminNav({
  items,
  label,
  className = "admin-nav",
}: {
  items: Item[];
  label: string;
  className?: string;
}) {
  const pathname = usePathname();

  return (
    <nav className={className} aria-label={label}>
      {items.map((item) => {
        const active = item.exact
          ? pathname === item.href
          : pathname === item.href || pathname.startsWith(`${item.href}/`);
        return (
          <Link key={item.href} href={item.href} className={active ? "is-active" : ""}>
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
