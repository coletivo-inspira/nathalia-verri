﻿﻿﻿import { motion } from 'framer-motion';
import image2 from '../assets/3.jpeg';
import { useTranslation } from 'react-i18next';
import { educationItems, skillKeys, experienceItems } from '../data/about';

const About = () => {
  const { t } = useTranslation();

  return (
    <section
      id="about"
      className="bg-[#faf8f6] py-20 md:py-32 px-6 md:px-12 lg:px-20"
    >
      <div className="max-w-7xl mx-auto">
        {/* Título */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-playfair text-5xl md:text-7xl lg:text-8xl text-zinc-900 mb-16 lg:mb-24"
        >
          {t('about.title')}
        </motion.h2>

        <div className="grid lg:grid-cols-[1fr_1.2fr_1fr] gap-12 lg:gap-20 items-start">
          {/* ESQUERDA */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1 space-y-16"
          >
            {/* SOBRE */}
            <div className="space-y-8">
              <p className="text-xl lg:text-2xl leading-relaxed text-zinc-700">
                {t('about.description1')}
              </p>

              <p className="text-lg leading-relaxed text-zinc-600">
                {t('about.description2')}
              </p>

              <p className="text-lg leading-relaxed text-zinc-600">
                {t('about.description3')}
              </p>
            </div>

            {/* FORMAÇÃO */}
            <div>
              <h3 className="font-playfair text-3xl md:text-4xl text-zinc-900 border-b border-zinc-300 pb-4 mb-8">
                {t('about.educationTitle')}
              </h3>

              <div className="space-y-6">
                {educationItems.map((item) => (
                  <div key={item.titleKey}>
                    <h4 className="font-semibold text-zinc-900">
                      {t(item.titleKey)}
                    </h4>
                    <p className="text-zinc-500">{t(item.detailKey)}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* HABILIDADES */}
            <div>
              <h3 className="font-playfair text-3xl md:text-4xl text-zinc-900 border-b border-zinc-300 pb-4 mb-8">
                {t('about.skillsTitle')}
              </h3>

              <div className="flex flex-wrap gap-3">
                {skillKeys.map((key) => (
                  <span
                    key={key}
                    className="px-4 py-2 border border-zinc-300 rounded-full text-sm text-zinc-700"
                  >
                    {t(`about.skills.${key}`)}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* FOTO */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="order-1 lg:order-2"
          >
            <div className="relative">
              <div className="absolute -inset-4 rounded-[32px] border border-zinc-200" />

              <div className="absolute -inset-2 rounded-[28px] bg-gradient-to-br from-zinc-100 to-zinc-50" />

              <img
                src={image2}
                alt="Nathália Verri"
                className="relative w-full rounded-[24px] object-cover shadow-xl"
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* DIREITA */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-3"
          >
            <div className="lg:sticky lg:top-24">
              <h3 className="font-playfair text-3xl md:text-4xl text-zinc-900 border-b border-zinc-300 pb-4 mb-8">
                {t('about.experienceTitle')}
              </h3>

              <div className="space-y-10">
                {experienceItems.map((exp) => (
                  <div key={exp.titleKey}>
                    <h4 className="font-semibold text-zinc-900">
                      {t(exp.titleKey)}
                    </h4>
                    <p className="text-zinc-500 text-sm">
                      {t(exp.dateKey)}
                    </p>
                    <p className="mt-2 text-zinc-600 leading-relaxed">
                      {t(exp.descriptionKey)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;