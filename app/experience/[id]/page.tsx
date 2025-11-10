import { notFound } from "next/navigation";
import { experiences } from "@/data/experience";
import { Header } from "@/components/Header";
import { ExperienceDetailClient } from "@/components/ExperienceDetailClient";

export default async function ExperienceDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const experience = experiences.find((exp) => exp.id === id);

  if (!experience) {
    notFound();
  }

  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <ExperienceDetailClient experience={experience} />
        </div>
      </div>
    </main>
  );
}

export function generateStaticParams() {
  return experiences.map((exp) => ({
    id: exp.id,
  }));
}
