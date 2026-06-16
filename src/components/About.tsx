import { motion } from 'framer-motion';

const About = () => {
  return (
    <section
      id="about"
      className="py-32 px-6 md:px-12 bg-[#faf8f6]"
    >
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="uppercase tracking-[0.3em] text-sm text-zinc-400">
            Sobre mim
          </span>

          <h2 className="text-4xl md:text-6xl font-playfair text-zinc-900 mt-4 mb-12 leading-tight">
            Comunicação estratégica com foco em resultado.
          </h2>

          <div className="space-y-8 text-zinc-600 text-lg leading-relaxed font-light">
            <p>
              Sou apaixonada por conectar marcas e pessoas através de estratégias
              criativas, posicionamento digital e comunicação eficiente.
            </p>

            <p>
              Minha trajetória une experiência comercial, marketing e social media,
              permitindo uma visão ampla sobre crescimento de marcas, presença
              digital e relacionamento com clientes.
            </p>

            <p>
              Atuo com branding, criação de conteúdo, campanhas digitais, CRM e
              gestão estratégica, sempre buscando transformar ideias em resultados
              reais e relevantes.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;