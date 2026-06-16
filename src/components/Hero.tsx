import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { FaLinkedin, FaInstagram } from 'react-icons/fa';

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 md:px-12 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#f8f5f2] via-white to-[#f1ece7]" />

      <div className="relative max-w-5xl mx-auto text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="uppercase tracking-[0.4em] text-sm text-zinc-500">
            Comercial • Marketing • Social Media
          </span>

          <h1 className="text-6xl md:text-8xl font-playfair text-zinc-900 mt-6 leading-[0.95]">
            Nathália
            <br />
            Verri
          </h1>

          <p className="max-w-2xl mx-auto text-lg md:text-xl text-zinc-600 mt-8 leading-relaxed font-light">
            Transformando comunicação, estratégia e presença digital
            em experiências que geram conexão e resultados.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
            <a
              href="#contact"
              className="px-8 py-4 bg-zinc-900 text-white rounded-full flex items-center justify-center gap-2 hover:scale-105 transition-all duration-300"
            >
              Entrar em contato
              <ArrowRight size={18} />
            </a>

            <div className="flex items-center justify-center gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-full border border-zinc-300 flex items-center justify-center hover:bg-zinc-900 hover:text-white transition-all duration-300"
              >
                <FaLinkedin size={20} />
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-full border border-zinc-300 flex items-center justify-center hover:bg-zinc-900 hover:text-white transition-all duration-300"
              >
                <FaInstagram size={20} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;