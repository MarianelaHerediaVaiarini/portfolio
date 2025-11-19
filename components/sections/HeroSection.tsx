"use client";

import { motion } from "framer-motion";
import { useLocale } from "@/contexts/LocaleContext";
import { getTranslations } from "@/lib/i18n";
import Image from "next/image";

export function HeroSection() {
  const { locale } = useLocale();
  const t = getTranslations(locale);

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 20, filter: "blur(6px)" },
    animate: { opacity: 1, y: 0, filter: "blur(0px)" },
    transition: { duration: 1, delay, ease: [0.16, 1, 0.3, 1] as const },
  });

  const imageReveal = {
    initial: { opacity: 0, scale: 0.92, filter: "blur(6px)" },
    animate: { opacity: 1, scale: 1, filter: "blur(0px)" },
    transition: { duration: 1.2, delay: 1.2, ease: [0.16, 1, 0.3, 1] as const },
  };

  return (
    <section className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-center px-6 md:px-16 lg:px-24 gap-6 md:gap-12 pt-24 md:pt-20 pb-8">
      <div className="flex-1 text-left space-y-6 w-full">
        <motion.h1
          {...fadeUp(0)}
          className="text-5xl sm:text-6xl font-bold text-gray-900 dark:text-white"
        >
          {t.hero.name} <br />
          {t.hero.surname}
        </motion.h1>

        <motion.h3
          {...fadeUp(0.3)}
          className="text-2xl text-gray-700 dark:text-gray-300 font-medium"
        >
          {t.hero.subtitle}
        </motion.h3>

        <motion.p
          {...fadeUp(0.6)}
          className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-md"
        >
          {t.hero.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scaleX: 0.6 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.9,
            ease: [0.16, 1, 0.3, 1] as const,
          }}
          className="h-1 w-20 origin-left bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
        />
      </div>

      {/* Right Image */}
      <motion.div
        {...imageReveal}
        className="flex-1 flex justify-center w-full"
      >
        <div className="relative w-full max-w-[300px] sm:max-w-[400px] md:max-w-[550px] aspect-square">
          {/* Soft Breathing Glow */}
          <motion.div
            initial={{ opacity: 0.15, scale: 1.05 }}
            animate={{ opacity: 0.28, scale: 1.15 }}
            transition={{
              duration: 6,
              delay: 1.2,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
            className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-600/20 blur-3xl -z-10"
          />

          <Image
            src="/hero.png"
            alt="ilustration-developer"
            fill
            priority
            className="object-contain select-none"
            sizes="(max-width: 640px) 300px, (max-width: 768px) 400px, (max-width: 1200px) 40vw, 550px"
          />
        </div>
      </motion.div>
    </section>
  );
}
