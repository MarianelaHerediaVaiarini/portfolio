"use client";

import { motion } from "framer-motion";
import { useLocale } from "@/contexts/LocaleContext";
import { getTranslations } from "@/lib/i18n";
import { technologies } from "@/data/technologies";
import { TechnologyBadge } from "@/components/TechnologyBadge";

export function TechnologiesSection() {
  const { locale } = useLocale();
  const t = getTranslations(locale);

  const groupedTechnologies = technologies.reduce(
    (acc, tech) => {
      if (!acc[tech.category]) {
        acc[tech.category] = [];
      }
      acc[tech.category].push(tech);
      return acc;
    },
    {} as Record<string, typeof technologies>
  );

  return (
    <section id="technologies" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12">
            {t.technologies.title}
          </h2>
        </motion.div>
        <div className="space-y-12">
          {(["frontend", "backend", "databases", "tools"] as const).map(
            (category, categoryIndex) => {
              const categoryTechs = groupedTechnologies[category] || [];
              if (categoryTechs.length === 0) return null;
              
              return (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                >
                  <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
                    {t.technologies.categories[category]}
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {categoryTechs.map((tech, index) => (
                      <TechnologyBadge
                        key={tech.name}
                        technology={tech}
                        index={index}
                      />
                    ))}
                  </div>
                </motion.div>
              );
            }
          )}
        </div>
      </div>
    </section>
  );
}

