import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

const education = [
  {
    institution: 'UNA',
    course: 'Publicidade e Propaganda',
    description:
      'Formação superior com foco em estratégias de comunicação, branding, criação de campanhas e comportamento do consumidor.',
  },
  {
    institution: 'Escola Estadual Maestro Villa Lobos',
    course: 'Ensino Médio',
    description:
      'Formação básica com desenvolvimento de habilidades interpessoais, comunicação e organização.',
  },
];

const Education = () => {
  return (
    <section
      id="education"
      className="py-32 px-6 md:px-12 bg-white"
    >
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="text-center mb-20">
            <span className="uppercase tracking-[0.3em] text-sm text-zinc-400">
              Formação
            </span>

            <h2 className="text-4xl md:text-6xl font-playfair text-zinc-900 mt-4">
              Formação Acadêmica
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className="group relative overflow-hidden rounded-3xl border border-zinc-200 bg-[#faf8f6] p-8 shadow-sm hover:shadow-2xl transition-all duration-500"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-zinc-100 to-transparent rounded-full blur-3xl opacity-70" />

                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-zinc-900 text-white flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <GraduationCap size={24} />
                  </div>

                  <h3 className="text-2xl font-playfair text-zinc-900 mb-2">
                    {edu.institution}
                  </h3>

                  <h4 className="text-zinc-500 font-medium mb-5">
                    {edu.course}
                  </h4>

                  <p className="text-zinc-600 leading-relaxed font-light">
                    {edu.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;