import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative py-32 px-6 md:px-12 bg-zinc-900 text-white overflow-hidden"
    >
      {/* Linha decorativa no topo e brilho sutil de fundo para dar profundidade */}
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
            Contato
          </span>

          <h2 className="text-4xl md:text-6xl font-playfair mt-6 mb-8 text-zinc-100">
            Vamos criar algo incrível juntos.
          </h2>

          <p className="text-zinc-400 text-lg max-w-xl mx-auto leading-relaxed mb-12">
            Estou disponível para novos projetos, parcerias e oportunidades.
            Sinta-se à vontade para me mandar uma mensagem.
          </p>

          {/* Botão de E-mail (Ação Principal) */}
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="mailto:nathverri2016@gmail.com"
            className="
              group flex items-center justify-center gap-3 
              px-10 py-5 rounded-full bg-white text-zinc-900 font-medium 
              hover:shadow-[0_0_30px_rgba(255,255,255,0.15)] 
              transition-all duration-300
            "
          >
            <Mail size={20} className="group-hover:rotate-12 transition-transform duration-300" />
            nathverri2016@gmail.com
          </motion.a>

          {/* Redes Sociais */}
          <div className="flex justify-center gap-6 mt-16">
            <a
              href="https://linkedin.com"
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
              href="https://instagram.com"
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