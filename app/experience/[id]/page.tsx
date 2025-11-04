import { notFound } from "next/navigation";
import { experiences } from "@/data/experience";
import { Header } from "@/components/Header";
import Link from "next/link";
import { ExperienceDetail } from "@/components/ExperienceDetail";

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
          <Link
            href="/#experience"
            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 mb-8 transition-colors"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Experience
          </Link>
          <ExperienceDetail experience={experience} />
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

