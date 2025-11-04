"use client";

import { motion } from "framer-motion";
import { useLocale } from "@/contexts/LocaleContext";
import { getTranslations } from "@/lib/i18n";
import Image from "next/image";

export function HeroSection() {
  const { locale } = useLocale();
  const t = getTranslations(locale);

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay },
  });

  return (
    <section className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-center px-6 lg:px-16 gap-12 pt-20">
      <div className="flex-1 text-left space-y-4">
        <motion.h1
          {...fadeUp(0.1)}
          className="text-5xl sm:text-6xl font-bold text-gray-900 dark:text-white"
        >
          {t.hero.title}
        </motion.h1>

        <motion.h3
          {...fadeUp(0.25)}
          className="text-2xl text-gray-700 dark:text-gray-300 font-medium"
        >
          {t.hero.subtitle}
        </motion.h3>

        <motion.p
          {...fadeUp(0.4)}
          className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-md"
        >
          {t.hero.description}
        </motion.p>

        <motion.div
          {...fadeUp(0.8)}
          className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-md"
        >
          <a
            href="#projects"
            className="inline-block px-8 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
          >
            {t.hero.cta}
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, delay: 1.2 }}
        className="flex-1 flex justify-center"
      >
        <div className="relative w-full max-w-[550px] aspect-square">
          <Image
            src="/hero.png"
            alt="ilustration-developer"
            fill
            priority
            className="object-contain select-none"
            sizes="(max-width: 768px) 80vw, (max-width: 1200px) 40vw, 400px"
          />
        </div>
      </motion.div>
    </section>
  );
}

