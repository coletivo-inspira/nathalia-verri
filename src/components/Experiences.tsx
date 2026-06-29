import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { projects } from '../data/projects';

const ease = [0.16, 1, 0.3, 1] as const;

const Experiences = () => {
  const navigate = useNavigate();

  return (
    <section
      id="experiences"
      className="py-32 px-6 md:px-12 bg-white"
    >
      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1.2, ease }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-20 md:mb-32"
        >
          <div className="max-w-2xl">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease }}
              className="w-12 h-[1px] bg-neutral-300 mb-8 origin-left"
            />

            <span className="uppercase tracking-[0.25em] text-xs font-medium text-neutral-400 block mb-6">
              Portfólio
            </span>

            <h2 className="text-4xl md:text-6xl lg:text-7xl font-light text-neutral-900 tracking-tight leading-[1.05]">
              Projetos que
              <br />
              <span className="font-serif italic text-neutral-500">
                contam histórias.
              </span>
            </h2>
          </div>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-20 md:gap-y-0 md:gap-x-16 lg:gap-x-24">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              onClick={() => navigate(`/projeto/${project.id}`)}
              initial={{ opacity: 0, y: 80, filter: 'blur(10px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{
                duration: 1.2,
                delay: index * 0.15,
                ease,
              }}
              className={`
                group cursor-pointer flex flex-col items-center text-center
                ${index % 2 === 1 ? 'md:mt-40 lg:mt-56' : ''}
              `}
            >
              {/* Contêiner da Imagem (Agora 100% Redondo) */}
              <div
                className="
                  relative overflow-hidden rounded-full bg-neutral-100
                  aspect-square w-full max-w-[85%] md:max-w-[420px]
                  shadow-sm hover:shadow-xl transition-all duration-700
                "
              >
                <img
                  src={project.cover}
                  alt={project.title}
                  className="
                    absolute inset-0
                    w-full h-full
                    object-cover
                    transition-transform
                    duration-[2000ms]
                    ease-out
                    group-hover:scale-110
                  "
                />

                {/* Overlay Escuro com borda arredondada para respeitar o clipping */}
                <div className="absolute inset-0 bg-black/5 group-hover:bg-black/20 transition-colors duration-700 rounded-full" />

                {/* Botão Central de Interação */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div
                    className="
                      w-16 h-16
                      rounded-full
                      bg-white/95
                      backdrop-blur-sm
                      flex items-center justify-center
                      opacity-0 scale-50
                      group-hover:opacity-100
                      group-hover:scale-100
                      transition-all duration-500
                    "
                  >
                    <ArrowUpRight
                      size={24}
                      strokeWidth={1.5}
                    />
                  </div>
                </div>
              </div>

              {/* Informações do Projeto - Centralizadas para equilibrar com o círculo */}
              <div className="mt-8 flex flex-col items-center w-full max-w-[85%] md:max-w-[420px]">
                <span className="text-sm text-neutral-300 font-serif italic mb-3 transition-transform duration-500">
                  0{index + 1}
                </span>
                
                <div className="group-hover:-translate-y-1 transition-transform duration-500">
                  <h3 className="text-xl md:text-2xl font-light text-neutral-900">
                    {project.title}
                  </h3>

                  <p className="text-xs text-neutral-500 mt-2 tracking-[0.1em] uppercase">
                    {project.category}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experiences;