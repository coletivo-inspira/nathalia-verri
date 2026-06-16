import { motion } from 'framer-motion';

const experiences = [
  {
    title: 'Suporte Comercial',
    company: 'Emive&CO',
    description:
      'Atuação estratégica em processos comerciais, relacionamento com clientes e suporte ao time de vendas.',
  },
  {
    title: 'Auxiliar de Vendas',
    company: 'Hidrau Máquinas',
    description:
      'Apoio em rotinas comerciais, prospecção e organização de processos de vendas.',
  },
  {
    title: 'Assistente Legislativa',
    company: 'Câmara Municipal de Belo Horizonte',
    description:
      'Suporte administrativo, organização de demandas e comunicação institucional.',
  },
];

const Experiences = () => {
  return (
    <section
      id="experiences"
      className="py-32 px-6 md:px-12 bg-[#faf8f6]"
    >
      <div className="max-w-5xl mx-auto">
        <span className="uppercase tracking-[0.3em] text-sm text-zinc-400">
          Experiência
        </span>

        <h2 className="text-4xl md:text-6xl font-playfair text-zinc-900 mt-4 mb-20">
          Trajetória profissional
        </h2>

        <div className="space-y-10">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -4 }}
              className="bg-white border border-zinc-200 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 className="text-2xl font-playfair text-zinc-900">
                  {exp.title}
                </h3>

                <span className="text-zinc-500 mt-2 md:mt-0">
                  {exp.company}
                </span>
              </div>

              <p className="text-zinc-600 leading-relaxed font-light">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experiences;