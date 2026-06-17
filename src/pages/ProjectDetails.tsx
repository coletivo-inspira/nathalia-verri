import { motion } from 'framer-motion';
import { useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight, ExternalLink } from 'lucide-react'; // Adicionei um ícone de link externo para visual!
import { projects } from '../data/projects';

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const project = useMemo(
    () => projects.find((item) => item.id === id),
    [id]
  );

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#faf8f6]">
        <h1 className="text-2xl font-light text-zinc-500">Projeto não encontrado.</h1>
      </div>
    );
  }

  const currentIndex = projects.findIndex((p) => p.id === project.id);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  const isVideo = (url: string) => {
    if (typeof url !== 'string') return false;
    return url.match(/\.(mp4|webm)$/i);
  };

  return (
    <main className="bg-[#faf8f6] overflow-hidden">
      {/* HERO SECTION */}
      <section className="min-h-screen flex items-center px-6 md:px-12 lg:px-20 pt-20">
        <div className="max-w-7xl mx-auto w-full">
          <motion.button
            onClick={() => navigate('/')}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-20 flex items-center gap-3 text-zinc-400 hover:text-zinc-900 transition-colors uppercase tracking-widest text-xs font-medium"
          >
            <ArrowLeft size={16} />
            Voltar
          </motion.button>

          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="uppercase tracking-[0.4em] text-xs text-zinc-400 font-medium"
          >
            {project.category}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-playfair text-6xl md:text-8xl lg:text-[9rem] leading-[0.9] text-zinc-900 mt-8 tracking-tight"
          >
            {project.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="mt-12 max-w-2xl text-zinc-500 text-xl md:text-2xl font-light leading-relaxed"
          >
            {project.description}
          </motion.p>
        </div>
      </section>

      {/* CAPA FULLSCREEN */}
      <section className="h-screen w-full relative">
        <motion.div
          initial={{ scale: 1.05, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="w-full h-full"
        >
          {isVideo(project.cover) ? (
            <video src={project.cover} autoPlay loop muted playsInline className="w-full h-full object-cover" />
          ) : (
            <img src={project.cover} alt={project.title} className="w-full h-full object-cover" />
          )}
        </motion.div>
      </section>

      {/* TEXTO DE DESTAQUE */}
      <section className="py-32 md:py-48 px-6 md:px-12">
        <div className="max-w-5xl mx-auto text-center md:text-left">
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="text-3xl md:text-5xl lg:text-6xl leading-[1.3] text-zinc-800 font-playfair"
          >
            {project.content}
          </motion.p>
        </div>
      </section>

      {/* GALERIA EDITORIAL COM LINKS */}
      <section className="px-6 md:px-12 lg:px-20 pb-40">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-12 gap-y-12 md:gap-y-0">
            {project.results.map((item: any, i: number) => {
              
              // Extraindo a mídia e o link do nosso novo formato de dados
              const mediaUrl = typeof item === 'string' ? item : item.media;
              const linkUrl = typeof item === 'string' ? null : item.link;

              const collageClasses = [
                "md:col-span-5 z-10 md:mt-12", 
                "md:col-span-4 z-30 md:-ml-16 md:-mt-8", 
                "md:col-span-3 z-20 md:-ml-12 md:mt-16", 
                "md:col-span-4 md:col-start-2 z-40 md:-mt-24", 
                "md:col-span-4 z-50 md:-ml-10 md:-mt-8", 
                "md:col-span-3 z-30 md:-ml-12 md:-mt-32", 
              ];

              const itemClass = collageClasses[index % 6];

              // Renderizando a Imagem ou Vídeo
              const MediaContent = isVideo(mediaUrl) ? (
                <video src={mediaUrl} autoPlay loop muted playsInline className="w-full h-auto object-cover max-h-[70vh]" />
              ) : (
                <img src={mediaUrl} alt="" className="w-full h-auto object-cover max-h-[70vh]" />
              );

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.8, delay: (index % 3) * 0.1 }}
                  className={`col-span-12 relative ${itemClass} max-md:-mt-10 max-md:first:mt-0 hover:z-[100] group`}
                >
                  <div className="relative w-full rounded-xl md:rounded-2xl overflow-hidden shadow-[0_20px_50px_-10px_rgba(0,0,0,0.3)] hover:scale-[1.03] transition-all duration-500 ease-out bg-zinc-100">
                    
                    {/* Se tiver link, vira um botão clicável com ícone no hover */}
                    {linkUrl ? (
                      <a href={linkUrl} target="_blank" rel="noopener noreferrer" className="block relative w-full h-full cursor-pointer">
                        {MediaContent}
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <ExternalLink className="text-white w-10 h-10" />
                        </div>
                      </a>
                    ) : (
                      MediaContent // Se não tiver link, renderiza normal
                    )}

                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* RESULTADOS DINÂMICOS */}
      <section className="py-32 px-6 md:px-12 border-t border-zinc-200/50">
        <div className="max-w-6xl mx-auto">
          <span className="uppercase tracking-[0.3em] text-xs text-zinc-400 font-medium">
            Resultados
          </span>

          {/* Opcional: Se o projeto não tiver a tag "results" cadastrada, ele não quebra a tela */}
          {project.results && (
            <div className="grid md:grid-cols-3 gap-16 mt-20">
              {project.results.map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.8 }}
                >
                  <h3 className="font-playfair text-6xl md:text-7xl text-zinc-900">
                    {item.valor}
                  </h3>
                  <p className="mt-6 text-zinc-500 text-lg font-light">
                    {item.texto}
                  </p>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* PRÓXIMO PROJETO */}
      <section className="py-32 px-6 md:px-12 lg:px-20 bg-zinc-900 text-white">
        <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
          <span className="uppercase tracking-[0.3em] text-xs text-zinc-400">
            Próximo Projeto
          </span>

          <button
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
              setTimeout(() => navigate(`/projeto/${nextProject.id}`), 300);
            }}
            className="group mt-12 block"
          >
            <h2 className="font-playfair text-6xl md:text-8xl lg:text-[7rem] text-white group-hover:text-zinc-300 transition-colors duration-500">
              {nextProject.title}
            </h2>

            <div className="mt-12 flex items-center justify-center gap-4 text-zinc-400 group-hover:text-white transition-colors">
              <span className="uppercase tracking-widest text-sm">Descobrir</span>
              <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform duration-300" />
            </div>
          </button>
        </div>
      </section>
    </main>
  );
};

export default ProjectDetails;