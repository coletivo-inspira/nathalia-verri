import { useMemo, useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { projects } from '../data/projects';

// PADRÃO ORIGINAL (Web Desktop) - Espalhado
const PATTERN_WEB = [
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
].sort((a, b) => a.top - b.top);

// NOVO PADRÃO (Mobile) - 2 Colunas empurradas para a direita
const PATTERN_MOBILE = [
  { top: 50, left: 850, width: 390, rotate: -2 },
  { top: 120, left: 1280, width: 380, rotate: 3 },
  { top: 480, left: 870, width: 370, rotate: 1 },
  { top: 580, left: 1270, width: 390, rotate: -2 },
  { top: 920, left: 860, width: 390, rotate: -3 },
  { top: 1020, left: 1280, width: 380, rotate: 2 },
  { top: 1380, left: 870, width: 370, rotate: 2 },
  { top: 1480, left: 1260, width: 390, rotate: -1 },
  { top: 1820, left: 850, width: 390, rotate: -2 },
  { top: 1920, left: 1280, width: 380, rotate: 3 },
  { top: 2280, left: 860, width: 370, rotate: 1 },
  { top: 2380, left: 1270, width: 390, rotate: -3 },
  { top: 2720, left: 850, width: 380, rotate: -1 },
  { top: 2820, left: 1280, width: 380, rotate: 2 },
  { top: 3180, left: 870, width: 390, rotate: 3 },
  { top: 3280, left: 1260, width: 370, rotate: -2 },
  { top: 3620, left: 860, width: 380, rotate: -2 },
  { top: 3720, left: 1280, width: 380, rotate: 1 },
  { top: 4080, left: 870, width: 370, rotate: 2 },
  { top: 4180, left: 1270, width: 390, rotate: -1 },
].sort((a, b) => a.top - b.top);


const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const project = projects.find((item) => item.id === id);

  const currentIndex = projects.findIndex((p) => p.id === id);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  // --- CONTROLES DE ANIMAÇÃO ---
  const [autoIndex, setAutoIndex] = useState(0);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  // --- CONTROLE DE TELA (Desktop vs Mobile) ---
  const [isMobile, setIsMobile] = useState(false);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width <= 768);
      // Sempre aplica o scale para manter a proporção do canvas (Web e Mobile usam a mesma lógica!)
      setScale(Math.min(1, width / 1700));
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Loop de 5 segundos
  useEffect(() => {
    if (!project?.gallery?.length) return;
    const interval = setInterval(() => {
      setAutoIndex((prevIndex) => (prevIndex + 1) % project.gallery.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [project?.gallery?.length]);

  const isVideo = (url: string) => typeof url === 'string' && (url.includes('.mp4') || url.includes('video-files'));

  // Define as coordenadas baseadas no tamanho da tela
  const assignedPositions = useMemo(() => {
    if (!project) return [];
    const N = project.gallery.length;
    // Puxa o padrão espalhado para PC, ou o de 2 colunas para celular
    const basePattern = isMobile ? PATTERN_MOBILE : PATTERN_WEB;
    const slotsToUse = basePattern.slice(0, N);
    
    return [...slotsToUse].sort(() => Math.random() - 0.5);
  }, [project?.id, project?.gallery?.length, isMobile]); // isMobile adicionado como dependência para recarregar se virar a tela

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

  const maxTop = assignedPositions.length > 0
    ? Math.max(...assignedPositions.map(pos => pos.top)) 
    : 0;
  const canvasHeight = Math.max(1000, maxTop + 800);

  return (
    <div className="min-h-screen bg-[#f8f6f2] text-zinc-900 selection:bg-rose-200 overflow-x-hidden relative" style={{ height: (canvasHeight * scale) + 'px' }}>
      
      {/* CANVAS MANTÉM A MECÂNICA ABSOLUTA EM AMBOS */}
      <div 
        className="project-canvas absolute" 
        style={{ width: '1700px', height: canvasHeight + 'px', transform: 'scale(' + scale + ')', transformOrigin: 'top center', left: '50%', marginLeft: '-850px' }}
      >
        
        {/* SIDEBAR: Largura e fontes mudam dinamicamente se isMobile for true */}
        <aside className={`absolute top-[80px] left-[70px] z-50 bg-[#f8f6f2]/85 backdrop-blur-xl rounded-3xl border border-white/60 shadow-[0_8px_30px_rgba(0,0,0,0.04)] ${isMobile ? 'w-[750px] p-14' : 'w-[350px] p-10'}`}>
          <button 
            onClick={() => navigate('/')} 
            className={`inline-flex items-center gap-2 bg-white/50 hover:bg-white rounded-full font-bold uppercase tracking-[0.2em] text-zinc-500 hover:text-zinc-900 transition-all border border-zinc-200/50 shadow-sm ${isMobile ? 'text-[24px] px-8 py-4 mb-10' : 'text-[10px] px-4 py-2 mb-6'}`}
            style={{ fontFamily: 'var(--font-inter)' }}
          >
            <span>←</span> Voltar
          </button>

          {project.cover && (
            <div className={`rounded-2xl overflow-hidden border border-zinc-200/50 shadow-sm ${isMobile ? 'h-72 mb-10' : 'h-40 mb-6'}`}>
              <img src={project.cover} alt={`Capa do projeto ${project.title}`} className="w-full h-full object-cover" />
            </div>
          )}

          <h1 className={`leading-[1.1] tracking-tight text-zinc-900 break-words hyphens-auto ${isMobile ? 'text-[90px] mb-10' : 'text-4xl lg:text-[46px] mb-6'}`} style={{ fontFamily: 'var(--font-playfair)' }}>
            {project.title}
          </h1>

          <div className={`flex flex-wrap ${isMobile ? 'gap-4 mb-12' : 'gap-2 mb-6'}`}>
            {project.year && (
              <span className={`inline-flex bg-zinc-900 border border-zinc-900 rounded-full font-bold uppercase tracking-[0.1em] text-white ${isMobile ? 'text-[20px] px-6 py-3' : 'text-[10px] px-3 py-1.5'}`} style={{ fontFamily: 'var(--font-inter)' }}>{project.year}</span>
            )}
            <span className={`inline-flex bg-white border border-zinc-200 rounded-full font-bold uppercase tracking-[0.1em] text-zinc-500 ${isMobile ? 'text-[20px] px-6 py-3' : 'text-[10px] px-3 py-1.5'}`} style={{ fontFamily: 'var(--font-inter)' }}>{project.category}</span>
          </div>

          {project.description && (
            <p className={`font-medium text-zinc-800 leading-[1.6] ${isMobile ? 'text-[32px] mb-10' : 'text-[15px] mb-4'}`} style={{ fontFamily: 'var(--font-inter)' }}>{project.description}</p>
          )}

          <p className={`text-zinc-600 leading-[1.8] whitespace-pre-line ${isMobile ? 'text-[28px] mb-16' : 'text-[14px] mb-10'}`} style={{ fontFamily: 'var(--font-inter)' }}>{project.content}</p>

          {project.results && project.results.length > 0 && (
            <div className={`pt-8 border-t border-zinc-200/80 ${isMobile ? 'mt-10' : 'mt-0'}`}>
              <h3 className={`font-bold uppercase tracking-[0.2em] text-zinc-400 ${isMobile ? 'text-[24px] mb-12' : 'text-[10px] mb-6'}`} style={{ fontFamily: 'var(--font-inter)' }}>Impacto Gerado</h3>
              <div className={`flex flex-col ${isMobile ? 'gap-10' : 'gap-6'}`}>
                {project.results.map((item, index) => (
                  <div key={index}>
                    <h4 className={`leading-none text-zinc-900 ${isMobile ? 'text-[72px] mb-4' : 'text-[32px] mb-2'}`} style={{ fontFamily: 'var(--font-playfair)' }}>{item.valor}</h4>
                    <p className={`text-zinc-500 leading-snug ${isMobile ? 'text-[26px]' : 'text-[13px]'}`} style={{ fontFamily: 'var(--font-inter)' }}>{item.texto}</p>
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
              className={`group w-full flex items-center justify-between bg-zinc-900 text-white hover:bg-zinc-800 rounded-2xl font-bold uppercase tracking-[0.2em] transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 ${isMobile ? 'text-[22px] px-10 py-8 mt-4' : 'text-[11px] px-6 py-4'}`}
              style={{ fontFamily: 'var(--font-inter)' }}
            >
              <span>Próxima Experiência</span>
              <span className="transform group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </div>
        </aside>

        {/* GALERIA - Mesmo código de sempre, mas usa o grid dinâmico via JS */}
        {project.gallery.map((item, index) => {
          const pos = assignedPositions[index];
          if (!pos) return null;

          const isActive = hoverIndex === index || (hoverIndex === null && autoIndex === index);

          return (
            <a
              key={index}
              href={item.link || '#'}
              target="_blank"
              rel="noreferrer"
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(null)}
              className="absolute block transition-all duration-700 ease-out"
              style={{
                top: pos.top + 'px',
                left: pos.left + 'px',
                width: pos.width + 'px',
                height: 'auto',
                // Aumenta a distância de pulo no mobile para ficar visível (32px em vez de 16px)
                transform: isActive 
                  ? `translateY(-${isMobile ? 32 : 16}px) scale(1.05) rotate(${pos.rotate}deg)` 
                  : `rotate(${pos.rotate}deg)`,
                zIndex: isActive ? 9999 : 1,
              }}
            >
              <div 
                className="relative bg-white rounded-2xl border border-zinc-100 transition-all duration-500"
                style={{
                  padding: isMobile ? '24px' : '16px', // Borda branca polaroid maior no mobile
                  boxShadow: isActive 
                    ? '0 30px 70px rgba(0,0,0,0.15), 0 10px 20px rgba(0,0,0,0.08)' 
                    : '0 10px 40px rgba(0,0,0,0.06)'
                }}
              >
                <div className="relative rounded-xl overflow-hidden bg-zinc-50 flex items-center justify-center">
                  {isVideo(item.media) ? (
                    <video src={item.media} autoPlay muted loop playsInline className="w-full h-auto block rounded-xl" style={{ objectFit: 'contain' }} />
                  ) : (
                    <img src={item.media} alt={project.title} className="w-full h-auto block rounded-xl" style={{ objectFit: 'contain' }} />
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