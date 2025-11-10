"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { Experience } from "@/data/experience";
import { getTranslations } from "@/lib/i18n";
import { useLocale } from "@/contexts/LocaleContext";

interface ExperienceCardProps {
  experience: Experience;
  index: number;
}

function translatePeriod(period: string, t: any): string {
  return period.replace(/\b(January|February|March|April|May|June|July|August|September|October|November|December|Present)\b/g, (match) => t.experience.months[match] || match);
}

export function ExperienceCard({ experience, index }: ExperienceCardProps) {
  const { locale } = useLocale();
  const t = getTranslations(locale);

  const expKey = experience.id as keyof typeof t.experience.exp;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link href={`/experience/${experience.id}`}>
        <div className="group relative p-6 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300 hover:shadow-lg">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {t.experience.exp[expKey].position}
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-2">
                {t.experience.exp[expKey].company}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-500 mb-4">
                {translatePeriod(experience.period, t)}
              </p>
              <p className="text-gray-700 dark:text-gray-300 line-clamp-2">
                {t.experience.exp[expKey].description}
              </p>
            </div>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {experience.technologies.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 text-xs rounded-md bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
              >
                {tech}
              </span>
            ))}
            {experience.technologies.length > 4 && (
              <span className="px-2 py-1 text-xs rounded-md bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
                +{experience.technologies.length - 4}
              </span>
            )}
          </div>
          <div className="mt-4 text-sm text-blue-600 dark:text-blue-400 font-medium opacity-0 group-hover:opacity-100 transition-opacity">
            {t.experience.viewDetails} →
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

