import { useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { projects } from '../data/projects';

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const project = projects.find(
    (item) => item.id === id
  );

  const currentIndex = projects.findIndex((p) => p.id === id);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  if (!project) {
    return (
      <div className="project-not-found">
        Projeto não encontrado
      </div>
    );
  }

  const isVideo = (url: string) =>
    url.includes('.mp4') ||
    url.includes('video-files');

  const positions = useMemo(() => {
    const sizes = [
      { width: 220, height: 320 },
      { width: 260, height: 260 },
      { width: 190, height: 340 },
      { width: 300, height: 220 },
      { width: 240, height: 420 },
      { width: 320, height: 240 },
    ];

    return project.gallery.map(
      (_, index) => {
        const row = Math.floor(index / 4);

        const baseX = [
          520,
          760,
          980,
          1220,
        ][index % 4];

        const size =
          sizes[index % sizes.length];

        return {
          left:
            baseX +
            (Math.random() * 180 - 90),

          top:
            row * 360 +
            Math.random() * 200,

          rotate:
            Math.random() * 8 - 4,

          width: size.width,
          height: size.height,
        };
      }
    );
  }, [project.id]);

  const canvasHeight =
    Math.ceil(
      project.gallery.length / 4
    ) *
      420 +
    1200;

  return (
    <div className="project-page">
      <div
        className="project-canvas"
        style={{
          height: `${canvasHeight}px`,
        }}
      >
        {/* TEXTO E RESULTADOS NA ESQUERDA */}
        <aside className="project-sidebar">
          <h1>{project.title}</h1>

          <h2>{project.category}</h2>

          <p>{project.content}</p>

          {/* NOVA SEÇÃO DE RESULTADOS NA SIDEBAR */}
          {project.results && project.results.length > 0 && (
            <div 
              style={{ 
                marginTop: '40px', 
                paddingTop: '30px', 
                borderTop: '1px solid rgba(0,0,0,0.1)' 
              }}
            >
              <h3 style={{ 
                fontFamily: 'var(--font-inter)', 
                fontSize: '11px', 
                textTransform: 'uppercase', 
                letterSpacing: '0.2em', 
                color: '#888',
                marginBottom: '20px'
              }}>
                Impacto Gerado
              </h3>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {project.results.map((item, index) => (
                  <div key={index}>
                    <h4 style={{ 
                      fontFamily: 'var(--font-playfair)', 
                      fontSize: '2.2rem', 
                      lineHeight: '1', 
                      margin: '0 0 4px 0',
                      color: '#111'
                    }}>
                      {item.valor}
                    </h4>
                    <p style={{ 
                      margin: 0, 
                      fontSize: '0.85rem', 
                      color: '#666',
                      lineHeight: '1.4'
                    }}>
                      {item.texto}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* NAVEGAÇÃO (Ficou embaixo dos resultados) */}
          <div className="project-navigation" style={{ marginTop: '50px' }}>
            <button onClick={() => navigate('/')}>voltar</button>

            <span>•</span>

            <button 
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                setTimeout(() => navigate(`/projeto/${nextProject.id}`), 300);
              }}
            >
              próxima experiência
            </button>
          </div>
        </aside>

        {/* GALERIA FLUTUANTE */}
        {project.gallery.map(
          (item, index) => {
            const pos =
              positions[index];

            return (
              <a
                key={index}
                href={item.link || '#'}
                target="_blank"
                rel="noreferrer"
                className="floating-card"
                style={{
                  top: `${pos.top}px`,
                  left: `${pos.left}px`,
                  width: `${pos.width}px`,
                  height: `${pos.height}px`,
                  transform: `rotate(${pos.rotate}deg)`,
                }}
              >
                {isVideo(item.media) ? (
                  <video
                    src={item.media}
                    autoPlay
                    muted
                    loop
                    playsInline
                  />
                ) : (
                  <img
                    src={item.media}
                    alt={project.title}
                  />
                )}
              </a>
            );
          }
        )}
      </div>
    </div>
  );
};

export default ProjectDetails;