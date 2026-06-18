import { useMemo, useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { projects } from '../data/projects';

// Padrão de 20 posições para as imagens
// O layout mantém sua estrutura predefinida (o padrão de 20),
// mas distribuiremos as imagens aleatoriamente por estas posições.
const PATTERN_OF_20 = [
  { top: 50, left: 450, width: 340, rotate: -2 },
  { top: 120, left: 860, width: 280, rotate: 3 },
  { top: 40, left: 1240, width: 360, rotate: -1 },

  { top: 420, left: 520, width: 280, rotate: 4 },
  { top: 380, left: 880, width: 420, rotate: -2 },
  { top: 460, left: 1340, width: 300, rotate: 2 },

  { top: 800, left: 450, width: 380, rotate: -3 },
  { top: 760, left: 890, width: 280, rotate: 1 },
  { top: 850, left: 1250, width: 360, rotate: -4 },

  { top: 1220, left: 500, width: 300, rotate: 2 },
  { top: 1150, left: 860, width: 380, rotate: -1 },
  { top: 1280, left: 1300, width: 280, rotate: 5 },

  { top: 1580, left: 460, width: 400, rotate: -3 },
  { top: 1520, left: 920, width: 300, rotate: 2 },
  { top: 1650, left: 1280, width: 350, rotate: -2 },

  { top: 1980, left: 520, width: 320, rotate: 1 },
  { top: 1920, left: 880, width: 360, rotate: -4 },
  { top: 2050, left: 1320, width: 300, rotate: 3 },

  { top: 2350, left: 480, width: 380, rotate: -2 },
  { top: 2300, left: 900, width: 310, rotate: 4 },
].sort((a, b) => a.top - b.top); // Ordenado do topo para baixo

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const project = projects.find((item) => item.id === id);

  const currentIndex = projects.findIndex((p) => p.id === id);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f8f6f2] text-zinc-900" style={{ fontFamily: 'var(--font-inter)' }}>
        <div className="text-center">
          <h1 className="text-3xl mb-4" style={{ fontFamily: 'var(--font-playfair)' }}>Projeto não encontrado</h1>
          <button onClick={() => navigate('/')} className="text-sm uppercase tracking-widest hover:text-zinc-500 transition-colors">
            ← Voltar à Home
          </button>
        </div>
      </div>
    );
  }

  const isVideo = (url) => typeof url === 'string' && (url.includes('.mp4') || url.includes('video-files'));

  const assignedPositions = useMemo(() => {
    const N = project.gallery.length;
    // Pega as primeiras posições do padrão para preencher a tela de cima para baixo
    const slotsToUse = PATTERN_OF_20.slice(0, N);
    
    // Embaralha as posições escolhidas para que a ordem visual das imagens seja sempre aleatória, mas mantendo o padrão de layout
    const shuffledSlots = [...slotsToUse].sort(() => Math.random() - 0.5);
    
    return shuffledSlots;
  }, [project.id, project.gallery.length]);

  // Altura do canvas se adapta dinamicamente para acomodar os cards até o final
  const [scale, setScale] = useState(1);
  useEffect(() => {
    const updateScale = () => { setScale(Math.min(1, window.innerWidth / 1700)); };
    updateScale();
    window.addEventListener('resize', updateScale);
    return () => window.removeEventListener('resize', updateScale);
  }, []);

  const maxTop = assignedPositions.length > 0
    ? Math.max(...assignedPositions.map(pos => pos.top)) 
    : 0;
  const canvasHeight = Math.max(1000, maxTop + 800);

  return (
    <div className="min-h-screen bg-[#f8f6f2] text-zinc-900 selection:bg-rose-200 overflow-x-hidden relative" style={{ height: (canvasHeight * scale) + 'px' }}>
      <div 
        className="project-canvas absolute" 
        style={{ width: '1700px', height: canvasHeight + 'px', transform: 'scale(' + scale + ')', transformOrigin: 'top center', left: '50%', marginLeft: '-850px' }}
      >
        {/* SIDEBAR NO JEITO ANTIGO (ABSOLUTE E ROLANDO JUNTO) COM OS NOVOS CAMPOS */}
        <aside className="absolute top-[80px] left-[70px] w-[350px] z-50 bg-[#f8f6f2]/85 backdrop-blur-xl p-10 rounded-3xl border border-white/60 shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
          <button 
            onClick={() => navigate('/')} 
            className="mb-6 inline-flex items-center gap-2 px-4 py-2 bg-white/50 hover:bg-white rounded-full text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500 hover:text-zinc-900 transition-all border border-zinc-200/50 shadow-sm"
            style={{ fontFamily: 'var(--font-inter)' }}
          >
            <span>←</span> Voltar
          </button>

          {/* NOVO CAMPO: COVER */}
          {project.cover && (
            <div className="mb-6 rounded-2xl overflow-hidden h-40 border border-zinc-200/50 shadow-sm">
              <img 
                src={project.cover} 
                alt={`Capa do projeto ${project.title}`} 
                className="w-full h-full object-cover"
              />
            </div>
          )}

          <h1 className="text-4xl lg:text-[46px] leading-[1.1] tracking-tight text-zinc-900 mb-6 break-words hyphens-auto" style={{ fontFamily: 'var(--font-playfair)' }}>
            {project.title}
          </h1>

          {/* NOVOS CAMPOS: YEAR E CATEGORY LADO A LADO */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.year && (
              <span 
                className="inline-flex px-3 py-1.5 bg-zinc-900 border border-zinc-900 rounded-full text-[10px] font-bold uppercase tracking-[0.1em] text-white"
                style={{ fontFamily: 'var(--font-inter)' }}
              >
                {project.year}
              </span>
            )}
            <span 
              className="inline-flex px-3 py-1.5 bg-white border border-zinc-200 rounded-full text-[10px] font-bold uppercase tracking-[0.1em] text-zinc-500"
              style={{ fontFamily: 'var(--font-inter)' }}
            >
              {project.category}
            </span>
          </div>

          {/* NOVO CAMPO: DESCRIPTION (Como um resumo/intro mais em destaque) */}
          {project.description && (
            <p 
              className="text-[15px] font-medium text-zinc-800 leading-[1.6] mb-4"
              style={{ fontFamily: 'var(--font-inter)' }}
            >
              {project.description}
            </p>
          )}

          {/* CONTENT NORMAL */}
          <p 
            className="text-[14px] text-zinc-600 leading-[1.8] whitespace-pre-line mb-10"
            style={{ fontFamily: 'var(--font-inter)' }}
          >
            {project.content}
          </p>

          {project.results && project.results.length > 0 && (
            <div className="pt-8 border-t border-zinc-200/80">
              <h3 
                className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 mb-6"
                style={{ fontFamily: 'var(--font-inter)' }}
              >
                Impacto Gerado
              </h3>
              
              <div className="flex flex-col gap-6">
                {project.results.map((item, index) => (
                  <div key={index}>
                    <h4 className="text-[32px] leading-none text-zinc-900 mb-2" style={{ fontFamily: 'var(--font-playfair)' }}>
                      {item.valor}
                    </h4>
                    <p className="text-[13px] text-zinc-500 leading-snug" style={{ fontFamily: 'var(--font-inter)' }}>
                      {item.texto}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="mt-12 pt-8 border-t border-zinc-200/80">
            <button 
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                setTimeout(() => navigate(`/projeto/${nextProject.id}`), 300);
              }}
              className="group w-full flex items-center justify-between px-6 py-4 bg-zinc-900 text-white hover:bg-zinc-800 rounded-2xl text-[11px] font-bold uppercase tracking-[0.2em] transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
              style={{ fontFamily: 'var(--font-inter)' }}
            >
              <span>Próxima Experiência</span>
              <span className="transform group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </div>
        </aside>

        {/* GALERIA COM IMAGENS SEMPRE INTEIRAS (height: auto) */}
        {project.gallery.map((item, index) => {
          const pos = assignedPositions[index];
          if (!pos) return null;

          return (
            <a
              key={index}
              href={item.link || '#'}
              target="_blank"
              rel="noreferrer"
              className="absolute block group transition-all duration-700 ease-out hover:z-[9999]"
              style={{
                top: pos.top + 'px',
                left: pos.left + 'px',
                width: pos.width + 'px',
                height: 'auto', // O segredo para a imagem ficar inteira
                transform: `rotate(${pos.rotate}deg)`,
              }}
            >
              <div className="relative p-3 sm:p-4 bg-white rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.06)] border border-zinc-100 transform transition-transform duration-500 group-hover:-translate-y-4 group-hover:scale-105 group-hover:shadow-[0_20px_60px_rgba(0,0,0,0.1)]">
                <div className="relative rounded-xl overflow-hidden bg-zinc-50 flex items-center justify-center">
                  {isVideo(item.media) ? (
                    <video
                      src={item.media}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full h-auto block rounded-xl"
                      style={{ objectFit: 'contain' }}
                    />
                  ) : (
                    <img
                      src={item.media}
                      alt={project.title}
                      className="w-full h-auto block rounded-xl"
                      style={{ objectFit: 'contain' }}
                    />
                  )}
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectDetails;