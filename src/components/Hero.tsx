import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import imageDesktop from '../assets/1.jpeg';
import imageMobile from '../assets/1_1.png';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center lg:items-center overflow-hidden bg-gradient-to-br from-[#f8f5f2] via-white via-10% to-[#f1ece7]"
    >
      {/* Background blur */}
      <div className="absolute top-[-120px] left-[-120px] w-[400px] h-[400px] bg-[#eaded2] rounded-full blur-3xl opacity-40 pointer-events-none" />

      {/* --- IMAGEM DESKTOP (Inalterada, oculta no mobile) --- */}
      <motion.div
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 0.8, x: 0 }}
        transition={{ duration: 1 }}
        className="
          absolute
          right-[-120px]
          top-1/2
          -translate-y-1/2
          w-[730px]
          h-[950px]
          hidden lg:block
        "
      >
        {/* Glow */}
        <div className="absolute inset-0 bg-[#d8c7b8] blur-3xl opacity-30 rounded-full scale-90" />

        {/* Image */}
        <img
          src={imageDesktop}
          alt="Nathália Verri (Desktop)"
          className="
            relative
            w-full
            h-full
            object-cover
            rounded-[3rem]
            opacity-90
          "
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#f8f5f2]/20 to-[#f8f5f2]" />
      </motion.div>

      {/* --- CONTEÚDO PRINCIPAL --- */}
      <div className="relative z-20 max-w-6xl mx-auto px-6 md:px-12 w-full pt-20 lg:pt-0">
        
        {/* NOVO: IMAGEM MOBILE (Oculta no desktop, visível no mobile) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          // Ajustei a altura para celular para ficar bem harmônico
          className="block lg:hidden w-full h-[200px] sm:h-[480px] mb-8 relative rounded-[2rem] overflow-hidden shadow-2xl shadow-[#d8c7b8]/40"
        >
          <img
            src={imageMobile}
            alt="Nathália Verri (Mobile)"
            className="w-full h-full object-cover object-center" // Ajuste 'object-center' se necessário
          />
          {/* Degradê na base da imagem mobile */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#f8f5f2] via-transparent to-transparent opacity-90" />
        </motion.div>

        {/* --- TEXTOS (Ajustados para Mobile e Web) --- */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl"
        >
          {/* Ajuste do tracking e quebra de texto para mobile */}
          <span className="block uppercase tracking-[0.2em] md:tracking-[0.4em] text-xs md:text-sm text-zinc-500 font-medium leading-relaxed">
            Marketing & Comunicação • Social Media • Estratégia de Conteúdo
          </span>

          {/* Ajuste do tamanho do título para mobile */}
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-playfair text-zinc-900 mt-6 leading-[1.1] md:leading-[0.95]">
            Nathália
            <br />
            Verri
          </h1>

          {/* Ajuste do espaçamento e texto para mobile */}
          <p className="max-w-2xl text-base sm:text-lg md:text-xl text-zinc-600 mt-6 md:mt-8 leading-relaxed font-light">
            Transformando comunicação, estratégia e presença digital
            em experiências que geram conexão e resultados.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-8 md:mt-12">
            <a
              href="#about"
              className="
                px-8 py-4 bg-zinc-900 text-white rounded-full
                flex items-center justify-center gap-2
                hover:scale-105 transition-all duration-300
                w-full sm:w-fit
              "
            >
              Conheça minha trajetória
              <ArrowRight size={18} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;