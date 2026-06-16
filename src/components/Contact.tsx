import { motion } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-32 px-6 md:px-12 bg-zinc-900 text-white"
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="uppercase tracking-[0.3em] text-sm text-zinc-400">
            Contato
          </span>

          <h2 className="text-4xl md:text-6xl font-playfair mt-6 mb-8">
            Vamos criar algo incrível juntos.
          </h2>

          <p className="text-zinc-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Estou disponível para novos projetos, parcerias e oportunidades.
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-6 mt-14">
            <a
              href="mailto:nathverri2016@gmail.com"
              className="flex items-center justify-center gap-3 px-8 py-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300"
            >
              <Mail size={20} />
              nathverri2016@gmail.com
            </a>

            <a
              href="https://wa.me/5531993331471"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 px-8 py-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300"
            >
              <Phone size={20} />
              (31) 99333-1471
            </a>
          </div>

          <div className="flex justify-center gap-5 mt-12">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-zinc-900 transition-all duration-300"
            >
              <FaLinkedin size={22} />
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-zinc-900 transition-all duration-300"
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