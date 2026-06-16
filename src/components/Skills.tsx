import { motion } from 'framer-motion';

const skills = [
  'Social Media',
  'Branding',
  'Meta Ads',
  'Google Ads',
  'CRM',
  'Canva',
  'CapCut',
  'Comunicação',
  'Marketing Digital',
  'Estratégia',
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-32 px-6 md:px-12 bg-white"
    >
      <div className="max-w-5xl mx-auto text-center">
        <span className="uppercase tracking-[0.3em] text-sm text-zinc-400">
          Habilidades
        </span>

        <h2 className="text-4xl md:text-6xl font-playfair text-zinc-900 mt-4 mb-16">
          Ferramentas & Expertise
        </h2>

        <div className="flex flex-wrap justify-center gap-5">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -4 }}
              className="px-7 py-4 rounded-2xl bg-[#faf8f6] border border-zinc-200 text-zinc-700 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;