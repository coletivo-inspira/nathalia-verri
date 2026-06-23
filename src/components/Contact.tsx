import { motion } from 'framer-motion';
import { Mail, Download } from 'lucide-react';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import curriculoPdf from '../assets/Currículo Nathália Verri.pdf';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();

  return (
    <section
      id="contact"
      className="relative py-32 px-6 md:px-12 bg-zinc-900 text-white overflow-hidden"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-white/[0.02] rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          <span className="uppercase tracking-[0.4em] text-sm text-zinc-400 font-medium">
            {t('contact.preTitle')}
          </span>

          <h2 className="text-4xl md:text-6xl font-playfair mt-6 mb-8 text-zinc-100">
            {t('contact.title')}
          </h2>

          <p className="text-zinc-400 text-lg max-w-xl mx-auto leading-relaxed mb-12">
            {t('contact.description')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={`mailto:${t('contact.email')}`}
              className="
                group flex items-center justify-center gap-3
                px-10 py-5 rounded-full bg-white text-zinc-900 font-medium
                hover:shadow-[0_0_30px_rgba(255,255,255,0.15)]
                transition-all duration-300
              "
            >
              <Mail
                size={20}
                className="group-hover:rotate-12 transition-transform duration-300"
              />
              {t('contact.email')}
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={curriculoPdf}
              download
              className="
                group flex items-center justify-center gap-3
                px-10 py-5 rounded-full
                border border-white/15
                text-white
                hover:bg-white/10
                hover:border-white/30
                transition-all duration-300
              "
            >
              <Download
                size={20}
                className="group-hover:translate-y-0.5 transition-transform duration-300"
              />
              {t('contact.downloadCV')}
            </motion.a>
          </div>

          <div className="flex justify-center gap-6 mt-16">
            <a
              href="https://www.linkedin.com/in/nathaliaverri/"
              target="_blank"
              rel="noopener noreferrer"
              className="
                w-14 h-14 rounded-full border border-white/10
                flex items-center justify-center text-zinc-400
                hover:bg-white/10 hover:text-white hover:border-white/30
                transition-all duration-300
              "
            >
              <FaLinkedin size={22} />
            </a>

            <a
              href="https://www.instagram.com/verrimuch/"
              target="_blank"
              rel="noopener noreferrer"
              className="
                w-14 h-14 rounded-full border border-white/10
                flex items-center justify-center text-zinc-400
                hover:bg-white/10 hover:text-white hover:border-white/30
                transition-all duration-300
              "
            >
              <FaInstagram size={22} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;