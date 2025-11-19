"use client";

import { motion } from "framer-motion";
import { useLocale } from "@/contexts/LocaleContext";
import { getTranslations } from "@/lib/i18n";
import { contacts } from "@/data/contact";

export function ContactSection() {
  const { locale } = useLocale();
  const t = getTranslations(locale);

  const getIcon = (type: string) => {
    const icons: Record<string, string> = {
      email: "✉️",
      linkedin: "💼",
      github: "💻",
      phone: "📞",
      twitter: "🐦",
      portfolio: "🌐",
    };
    return icons[type] || "📧";
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t.contact.title}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-12">
            {t.contact.subtitle}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {contacts.map((contact, index) => (
              <motion.a
                key={contact.type}
                href={contact.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="p-6 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-all"
              >
                <div className="text-3xl mb-3">{getIcon(contact.type)}</div>
                <div className="text-sm text-gray-500 dark:text-gray-400 mb-1 uppercase tracking-wide">
                  {contact.type}
                </div>
                <div className="text-gray-900 dark:text-white font-normal">
                  {contact.value}
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
