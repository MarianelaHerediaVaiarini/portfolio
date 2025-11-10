"use client";

import { motion } from "framer-motion";
import { useLocale } from "@/contexts/LocaleContext";
import { getTranslations } from "@/lib/i18n";

export function AboutSection() {
  const { locale } = useLocale();
  const t = getTranslations(locale);

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="md:text-4xl text-2xl font-semibold mb-6">
            {t.about.title}
          </h2>
          <p className="md:text-lg text-md  leading-relaxed">
            {t.about.description}
          </p>
          <p className="md:text-lg text-md leading-relaxed mt-2">
            {t.about.description2}
          </p>
        </motion.div>
      </div>
    </section>
  );
}

