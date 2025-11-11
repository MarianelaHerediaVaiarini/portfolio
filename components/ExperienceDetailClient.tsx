"use client";
import { useLocale } from "@/contexts/LocaleContext";
import { getTranslations } from "@/lib/i18n";
import Link from "next/link";
import { ExperienceDetail } from "@/components/ExperienceDetail";

export function ExperienceDetailClient({ experience }: { experience: any }) {
  const { locale } = useLocale();
  const t = getTranslations(locale);

  return (
    <>
      <Link
        href="/#experience"
        className="inline-flex items-center text-primary  hover:text-secondary mb-8 transition-colors"
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
        {t.experience.back}
      </Link>
      <ExperienceDetail experience={experience} />
    </>
  );
}
