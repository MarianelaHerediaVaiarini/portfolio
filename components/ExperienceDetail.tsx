"use client";

import { motion } from "framer-motion";
import type { Experience } from "@/data/experience";
import { getTranslations } from "@/lib/i18n";
import { useLocale } from "@/contexts/LocaleContext";

interface ExperienceDetailProps {
  experience: Experience;
}

export function ExperienceDetail({ experience }: ExperienceDetailProps) {
  const { locale } = useLocale();
  const t = getTranslations(locale);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-8"
    >
      <div className="mb-6">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
          {experience.position}
        </h1>
        <h2 className="text-2xl text-gray-600 dark:text-gray-400 mb-2">
          {experience.company}
        </h2>
        <p className="text-lg text-gray-500 dark:text-gray-500">
          {experience.period}
        </p>
      </div>

      <div className="mb-8">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Description
        </h3>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          {experience.description}
        </p>
      </div>

      <div className="mb-8">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          {t.experience.achievements}
        </h3>
        <ul className="space-y-3">
          {experience.achievements.map((achievement, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="flex items-start"
            >
              <span className="text-blue-600 dark:text-blue-400 mr-3 mt-1">✓</span>
              <span className="text-gray-700 dark:text-gray-300">{achievement}</span>
            </motion.li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          {t.experience.technologies}
        </h3>
        <div className="flex flex-wrap gap-3">
          {experience.technologies.map((tech, index) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg text-sm font-medium"
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

