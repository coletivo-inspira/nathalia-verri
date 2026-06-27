import { useMemo, useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { projects } from '../data/projects';
import ScrollToTopButton from '../components/ScrollToTopButton';

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
  { top: 140, left: 1280, width: 380, rotate: 3 },
  { top: 560, left: 870, width: 370, rotate: 1 },
  { top: 670, left: 1270, width: 390, rotate: -2 },
  { top: 1070, left: 860, width: 390, rotate: -3 },
  { top: 1180, left: 1280, width: 380, rotate: 2 },
  { top: 1580, left: 870, width: 370, rotate: 2 },
  { top: 1690, left: 1260, width: 390, rotate: -1 },
  { top: 2090, left: 850, width: 390, rotate: -2 },
  { top: 2200, left: 1280, width: 380, rotate: 3 },
  { top: 2600, left: 860, width: 370, rotate: 1 },
  { top: 2710, left: 1270, width: 390, rotate: -3 },
  { top: 3110, left: 850, width: 380, rotate: -1 },
  { top: 3220, left: 1280, width: 380, rotate: 2 },
  { top: 3620, left: 870, width: 390, rotate: 3 },
  { top: 3730, left: 1260, width: 370, rotate: -2 },
  { top: 4130, left: 860, width: 380, rotate: -2 },
  { top: 4240, left: 1280, width: 380, rotate: 1 },
  { top: 4640, left: 870, width: 370, rotate: 2 },
  { top: 4750, left: 1270, width: 390, rotate: -1 },
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

  // NOVO: Referência e Estado para medir a altura da barra lateral dinamicamente
  const sidebarRef = useRef<HTMLElement>(null);
  const [sidebarHeight, setSidebarHeight] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width <= 768);
      setScale(Math.min(1, width / 1700));
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // NOVO: Effect para observar as mudanças de tamanho da barra lateral em tempo real
  useEffect(() => {
    if (!sidebarRef.current) return;

    // O ResizeObserver atualiza a altura mesmo quando a foto carrega ou o texto quebra de linha
    const resizeObserver = new ResizeObserver((entries) => {
      if (entries[0]) {
        setSidebarHeight(entries[0].contentRect.height);
      }
    });

    resizeObserver.observe(sidebarRef.current);
    return () => resizeObserver.disconnect();
  }, [project?.id]);

  // Loop de 5 segundos
  useEffect(() => {
    if (!project?.gallery?.length) return;
    const interval = setInterval(() => {
      setAutoIndex((prevIndex) => (prevIndex + 1) % project.gallery.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [project?.gallery?.length]);

  const isVideo = (url: string) => typeof url === 'string' && (url.includes('.mp4') || url.includes('video-files'));

  const assignedPositions = useMemo(() => {
    if (!project) return [];
    const N = project.gallery.length;
    const basePattern = isMobile ? PATTERN_MOBILE : PATTERN_WEB;
    const slotsToUse = basePattern.slice(0, N);
    return [...slotsToUse].sort(() => Math.random() - 0.5);
  }, [project?.id, project?.gallery?.length, isMobile]);

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

  // --- CÁLCULO DE ALTURA INTELIGENTE ---
  const maxTop = assignedPositions.length > 0
    ? Math.max(...assignedPositions.map(pos => pos.top))
    : 0;

  const baseMinHeight = isMobile ? 2000 : 1000;
  const paddingBottom = isMobile ? 1200 : 800;

  // Calcula o espaço necessário pelas imagens
  const heightFromImages = maxTop + paddingBottom;

  // Calcula o espaço necessário pela barra lateral (posição top de 80px + altura do conteúdo + um respiro embaixo)
  const heightFromSidebar = 80 + sidebarHeight + (isMobile ? 200 : 100);

  // O canvasHeight final será o MAIOR valor entre as imagens, a barra lateral ou a altura mínima base.
  const canvasHeight = Math.max(baseMinHeight, heightFromImages, heightFromSidebar);

  return (
    <div className="min-h-screen bg-[#F7F5F2] text-neutral-800 selection:bg-[#6D8C9C] selection:text-white overflow-hidden relative" style={{ height: (canvasHeight * scale) + 'px' }}>
      <div
        className="project-canvas absolute"
        style={{ width: '1700px', height: canvasHeight + 'px', transform: 'scale(' + scale + ')', transformOrigin: 'top center', left: '50%', marginLeft: '-850px' }}
      >
        {/* NOVO: Adicionei o ref={sidebarRef} na tag aside abaixo */}
        <aside
          ref={sidebarRef}
          className={`absolute top-[80px] left-[70px] z-50 bg-[#F7F5F2]/85 backdrop-blur-xl rounded-3xl border border-white/60 shadow-[0_8px_30px_rgba(0,0,0,0.04)] ${isMobile ? 'w-[750px] p-14' : 'w-[350px] p-10'}`}
        >
          <button
            onClick={() => navigate('/')}
            className={`inline-flex items-center gap-2 bg-white/50 hover:bg-white rounded-full font-bold uppercase tracking-[0.2em] text-neutral-500 hover:text-neutral-900 transition-all border border-neutral-200/50 shadow-sm ${isMobile ? 'text-[24px] px-8 py-4 mb-10' : 'text-[10px] px-4 py-2 mb-6'}`}
            style={{ fontFamily: 'var(--font-inter)' }}
          >
            <span>←</span> Voltar
          </button>

          {project.cover && (
            <div className={`rounded-2xl overflow-hidden border border-neutral-200/50 shadow-sm ${isMobile ? 'h-72 mb-10' : 'h-40 mb-6'}`}>
              <img src={project.cover} alt={`Capa do projeto ${project.title}`} className="w-full h-full object-cover" />
            </div>
          )}

          <h1 className={`leading-[1.1] tracking-tight text-neutral-900 break-words hyphens-auto ${isMobile ? 'text-[90px] mb-10' : 'text-4xl lg:text-[46px] mb-6'}`} style={{ fontFamily: 'var(--font-playfair)' }}>
            {project.title}
          </h1>

          <div className={`flex flex-wrap ${isMobile ? 'gap-4 mb-12' : 'gap-2 mb-6'}`}>
            {project.year && (
              <span className={`inline-flex bg-neutral-900 border border-neutral-900 rounded-full font-bold uppercase tracking-[0.1em] text-white ${isMobile ? 'text-[20px] px-6 py-3' : 'text-[10px] px-3 py-1.5'}`} style={{ fontFamily: 'var(--font-inter)' }}>{project.year}</span>
            )}
            <span className={`inline-flex bg-white border border-neutral-200 rounded-full font-bold uppercase tracking-[0.1em] text-neutral-500 ${isMobile ? 'text-[20px] px-6 py-3' : 'text-[10px] px-3 py-1.5'}`} style={{ fontFamily: 'var(--font-inter)' }}>{project.category}</span>
          </div>

          {project.description && (
            <p className={`font-medium text-neutral-700 leading-[1.6] ${isMobile ? 'text-[32px] mb-10' : 'text-[15px] mb-4'}`} style={{ fontFamily: 'var(--font-inter)' }}>{project.description}</p>
          )}

          <p className={`text-neutral-600 leading-[1.8] whitespace-pre-line ${isMobile ? 'text-[28px] mb-16' : 'text-[14px] mb-10'}`} style={{ fontFamily: 'var(--font-inter)' }}>{project.content}</p>

          {project.links && project.links.length > 0 && (
            <div className={`pt-8 border-t border-neutral-200/80 ${isMobile ? 'mb-16' : 'mb-10'}`}>
              <h3 className={`font-bold uppercase tracking-[0.2em] text-neutral-400 ${isMobile ? 'text-[24px] mb-12' : 'text-[10px] mb-6'}`} style={{ fontFamily: 'var(--font-inter)' }}>Acessar</h3>
              <div className={`flex flex-col ${isMobile ? 'gap-6' : 'gap-4'}`}>
                {project.links.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center w-fit transition-all duration-300"
                  >
                    <span
                      className={`leading-none text-neutral-900 group-hover:text-neutral-500 transition-colors border-b border-transparent group-hover:border-neutral-300 pb-1 ${isMobile ? 'text-[52px]' : 'text-[26px]'}`}
                      style={{ fontFamily: 'var(--font-playfair)' }}
                    >
                      {link.texto}
                    </span>
                    <span className={`text-neutral-400 group-hover:text-neutral-900 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all ${isMobile ? 'text-[32px] ml-4' : 'text-[16px] ml-2'}`}>
                      ↗
                    </span>
                  </a>
                ))}
              </div>
            </div>
          )}

          {project.results && project.results.length > 0 && (
            <div className={`pt-8 border-t border-neutral-200/80 ${isMobile ? 'mt-10' : 'mt-0'}`}>
              <h3 className={`font-bold uppercase tracking-[0.2em] text-neutral-400 ${isMobile ? 'text-[24px] mb-12' : 'text-[10px] mb-6'}`} style={{ fontFamily: 'var(--font-inter)' }}>Impacto Gerado</h3>
              <div className={`flex flex-col ${isMobile ? 'gap-10' : 'gap-6'}`}>
                {project.results.map((item, index) => (
                  <div key={index}>
                    <h4 className={`leading-none text-neutral-900 ${isMobile ? 'text-[72px] mb-4' : 'text-[32px] mb-2'}`} style={{ fontFamily: 'var(--font-playfair)' }}>{item.valor}</h4>
                    <p className={`text-neutral-500 leading-snug ${isMobile ? 'text-[26px]' : 'text-[13px]'}`} style={{ fontFamily: 'var(--font-inter)' }}>{item.texto}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="mt-12 pt-8 border-t border-neutral-200/80">
            <button
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                setTimeout(() => navigate(`/projeto/${nextProject.id}`), 300);
              }}
              className={`group w-full flex items-center justify-between bg-neutral-900 text-white hover:bg-neutral-800 rounded-2xl font-bold uppercase tracking-[0.2em] transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 ${isMobile ? 'text-[22px] px-10 py-8 mt-4' : 'text-[11px] px-6 py-4'}`}
              style={{ fontFamily: 'var(--font-inter)' }}
            >
              <span>Próxima Experiência</span>
              <span className="transform group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </div>
        </aside>

        {/* GALERIA */}
        {project.gallery.map((item, index) => {
          const pos = assignedPositions[index];
          if (!pos) return null;

          const isActive =
            hoverIndex === index || (hoverIndex === null && autoIndex === index);

          const commonProps = {
            onMouseEnter: () => setHoverIndex(index),
            onMouseLeave: () => setHoverIndex(null),
            className: "absolute block transition-all duration-700 ease-out",
            style: {
              top: `${pos.top}px`,
              left: `${pos.left}px`,
              width: `${pos.width}px`,
              height: "auto",
              transform: isActive
                ? `translateY(-${isMobile ? 32 : 16}px) scale(1.05) rotate(${pos.rotate}deg)`
                : `rotate(${pos.rotate}deg)`,
              zIndex: isActive ? 9999 : 1,
            } as React.CSSProperties,
          };

          const content = (
            <div
              className="relative bg-white rounded-2xl border border-neutral-100 transition-all duration-500"
              style={{
                padding: isMobile ? "24px" : "16px",
                boxShadow: isActive
                  ? "0 30px 70px rgba(0,0,0,0.15), 0 10px 20px rgba(0,0,0,0.08)"
                  : "0 10px 40px rgba(0,0,0,0.06)",
              }}
            >
              <div className="relative rounded-xl overflow-hidden bg-neutral-50 flex items-center justify-center">
                {isVideo(item.media) ? (
                  <video
                    src={item.media}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-auto block rounded-xl"
                    style={{ objectFit: "contain" }}
                  />
                ) : (
                  <img
                    src={item.media}
                    alt={project.title}
                    className="w-full h-auto block rounded-xl"
                    style={{ objectFit: "contain" }}
                  />
                )}
              </div>
            </div>
          );

          const hasLink =
            typeof item.link === "string" && item.link.trim().length > 0;

          if (hasLink) {
            return (
              <a
                key={index}
                {...commonProps}
                href={item.link}
                target="_blank"
                rel="noreferrer"
              >
                {content}
              </a>
            );
          }

          return (
            <div key={index} {...commonProps}>
              {content}
            </div>
          );
        })}
      </div>
      <ScrollToTopButton />
    </div>
  );
};

export default ProjectDetails;