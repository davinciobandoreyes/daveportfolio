import { TestimonialsForm } from "@/components/admin/TestimonialsForm";
import { readTestimonials } from "@/lib/admin/content";
import { missingDatabaseEnv } from "@/lib/supabase-admin";

export const dynamic = "force-dynamic";

export default async function TestimonialsPage() {
  if (missingDatabaseEnv().length) return <h1>Testimonials</h1>;
  const items = await readTestimonials();

  return (
    <>
      <h1>Testimonials</h1>
      <TestimonialsForm initial={items} />
    </>
  );
}
