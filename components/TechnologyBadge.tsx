"use client";

import { motion } from "framer-motion";
import type { Technology } from "@/data/technologies";

interface TechnologyBadgeProps {
  technology: Technology;
  index: number;
}

export function TechnologyBadge({ technology, index }: TechnologyBadgeProps) {
  const levelColors = {
    advanced: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
    intermediate: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
    basic: "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300",
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      whileHover={{ scale: 1.05 }}
      className={`px-4 py-2 rounded-lg text-sm font-medium transition-transform ${levelColors[technology.level]}`}
    >
      {technology.name}
    </motion.div>
  );
}

