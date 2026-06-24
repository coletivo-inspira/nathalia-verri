import {
  Coffee,
  Heart,
  Mail,
  PenTool,
  Phone,
  Plane,
  Shirt,
  Sparkles,
} from 'lucide-react';
import { motion, type Variants } from 'framer-motion';
import { Link } from 'react-router-dom';
import profileImage from '../assets/1.jpeg';
import { projects } from '../data/projects';
import ScrollToTopButton from '../components/ScrollToTopButton';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';


// --- Componentes de Seção (Reutilizados de BrandManual.tsx para consistência) ---

const Section = ({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <motion.section
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className={className}
    >
      {children}
    </motion.section>
  );
};

const SectionHeader = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) => (
  <div className="mb-12 text-center">
    <h2 className="font-playfair text-5xl md:text-6xl text-zinc-900 tracking-tight">
      {title}
    </h2>
    <p className="mt-3 text-base text-zinc-500 max-w-2xl mx-auto">
      {subtitle}
    </p>
  </div>
);

// --- Componentes Locais da Página ---

const SpecialtyCard = ({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
}) => (
  <div className="p-8 border border-zinc-200/70 rounded-3xl bg-white/50 text-center flex flex-col items-center justify-start">
    <Icon size={32} strokeWidth={1.5} className="text-zinc-500 mb-4" />
    <h3 className="font-bold text-zinc-900 text-lg">{title}</h3>
    <p className="text-sm text-zinc-600 mt-2">{description}</p>
  </div>
);

const StatCard = ({
  value,
  label,
}: {
  value: string;
  label: string;
}) => (
  <div className="p-6 border border-zinc-200/70 rounded-2xl bg-white/50 text-center">
    <p className="font-playfair text-5xl text-zinc-900">{value}</p>
    <p className="text-sm text-zinc-600 mt-2">{label}</p>
  </div>
);

const MidiaKit = () => {
  return (
    <div className="bg-[#F7F5F2] font-inter text-zinc-800 antialiased">
      <main className="max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-32 space-y-24 md:space-y-32">
        {/* 1. Hero */}
        <Section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="font-playfair text-6xl sm:text-7xl md:text-8xl text-zinc-900 leading-none tracking-tighter">
              Mídia Kit:
            </h1>
            <p className="mt-4 text-lg md:text-xl text-zinc-600">
              @nanathsday
            </p>
            <p className="mt-8 max-w-lg mx-auto lg:mx-0 text-zinc-700 leading-relaxed">
              Uma jornada autêntica sobre lifestyle, beleza e bem-estar,
              compartilhada diariamente com uma comunidade engajada e fiel.
              Bem-vindo ao meu universo.
            </p>
          </div>
          <div className="relative h-[450px] w-full max-w-sm mx-auto lg:max-w-none">
            <img
              src={profileImage}
              alt="Nathália Verri"
              className="w-full h-full object-cover rounded-3xl shadow-2xl shadow-zinc-300/50"
            />
          </div>
        </Section>

        {/* 2. Sobre a Marca */}
        <Section>
          <SectionHeader
            title="Sobre Mim & O @nanathsday"
            subtitle="Mais que um perfil, o @nanathsday é um diário visual que inspira e conecta através de experiências reais."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="p-8 border border-zinc-200/70 rounded-3xl bg-white/50">
              <h3 className="font-bold text-xl text-zinc-900">Quem Sou Eu</h3>
              <p className="text-zinc-600 mt-2 text-sm leading-relaxed">
                Nathália Verri, comunicadora e criadora de conteúdo apaixonada
                por contar histórias que geram identificação.
              </p>
            </div>
            <div className="p-8 border border-zinc-200/70 rounded-3xl bg-white/50">
              <h3 className="font-bold text-xl text-zinc-900">Valores</h3>
              <p className="text-zinc-600 mt-2 text-sm leading-relaxed">
                Autenticidade, Proximidade, Qualidade Estética e Inspiração.
              </p>
            </div>
            <div className="p-8 border border-zinc-200/70 rounded-3xl bg-white/50">
              <h3 className="font-bold text-xl text-zinc-900">Meu Propósito</h3>
              <p className="text-zinc-600 mt-2 text-sm leading-relaxed">
                Criar um espaço seguro e inspirador, conectando marcas com
                propósito a uma comunidade que valoriza a transparência.
              </p>
            </div>
          </div>
        </Section>

        {/* 3. Nichos de Conteúdo */}
        <Section>
          <SectionHeader
            title="Nichos de Conteúdo"
            subtitle="Os pilares que definem o universo @nanathsday e engajam minha comunidade diariamente."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <SpecialtyCard
              icon={Coffee}
              title="Lifestyle & Rotina"
              description="Compartilhando o dia a dia, hábitos e descobertas que inspiram."
            />
            <SpecialtyCard
              icon={Sparkles}
              title="Beleza & Autocuidado"
              description="Reviews, tutoriais e dicas de produtos com foco em beleza real."
            />
            <SpecialtyCard
              icon={Shirt}
              title="Moda & Estilo Pessoal"
              description="Looks, tendências e achados que refletem uma identidade autêntica."
            />
            <SpecialtyCard
              icon={Plane}
              title="Viagens & Experiências"
              description="Roteiros e dicas de lugares que encantam, da gastronomia à cultura."
            />
            <SpecialtyCard
              icon={PenTool}
              title="Dicas & Reviews"
              description="Análises honestas de produtos e serviços que fazem parte do meu dia a dia."
            />
            <SpecialtyCard
              icon={Heart}
              title="Bem-estar"
              description="Reflexões e práticas sobre saúde mental, equilíbrio e qualidade de vida."
            />
          </div>
        </Section>

        {/* 4. Identidade Visual (Reutilizando de BrandManual) */}
        <Section>
          <Link to="/manual-de-marca">
            <SectionHeader
              title="Identidade Visual"
              subtitle="Uma estética limpa, sofisticada e que traduz a essência do @nanathsday. Clique para ver os detalhes."
            />
          </Link>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            <div className="border border-zinc-200/70 rounded-3xl bg-white/50 p-6">
              <div
                className="h-32 w-full rounded-2xl mb-4"
                style={{ backgroundColor: '#F7F5F2' }}
              />
              <h3 className="font-bold text-lg text-zinc-900">Off-White</h3>
            </div>
            <div className="border border-zinc-200/70 rounded-3xl bg-white/50 p-6">
              <div
                className="h-32 w-full rounded-2xl mb-4"
                style={{ backgroundColor: '#EAEAEA' }}
              />
              <h3 className="font-bold text-lg text-zinc-900">Cinza Pérola</h3>
            </div>
            <div className="border border-zinc-200/70 rounded-3xl bg-white/50 p-6">
              <div
                className="h-32 w-full rounded-2xl mb-4"
                style={{ backgroundColor: '#1C1C1C' }}
              />
              <h3 className="font-bold text-lg text-zinc-900">Grafite</h3>
            </div>
            <div className="border border-zinc-200/70 rounded-3xl bg-white/50 p-6">
              <div
                className="h-32 w-full rounded-2xl mb-4"
                style={{ backgroundColor: '#555555' }}
              />
              <h3 className="font-bold text-lg text-zinc-900">Cinza Texto</h3>
            </div>
            <div className="border border-zinc-200/70 rounded-3xl bg-white/50 p-6">
              <div
                className="h-32 w-full rounded-2xl mb-4"
                style={{ backgroundColor: '#6D8C9C' }}
              />
              <h3 className="font-bold text-lg text-zinc-900">Azul Acinzentado</h3>
            </div>
          </div>
        </Section>

        {/* 5. Meu Público */}
        <Section>
          <SectionHeader
            title="Meu Público"
            subtitle="Uma comunidade conectada por interesses em comum e pela busca de um lifestyle mais autêntico e consciente."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white/50 border border-zinc-200/70 rounded-3xl p-8 md:p-12">
            <div>
              <h3 className="font-playfair text-3xl text-zinc-900 mb-4">
                Demografia
              </h3>
              <ul className="space-y-2 text-zinc-600 list-disc list-inside">
                <li>
                  <b>Gênero:</b> 85% Mulheres
                </li>
                <li>
                  <b>Faixa Etária Principal:</b> 24-35 anos
                </li>
                <li>
                  <b>Localização:</b> São Paulo, Rio de Janeiro e Belo Horizonte
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-playfair text-3xl text-zinc-900 mb-4">
                Principais Interesses
              </h3>
              <ul className="space-y-2 text-zinc-600 list-disc list-inside">
                <li>Beleza e Skincare</li>
                <li>Moda e Acessórios</li>
                <li>Viagens e Turismo</li>
                <li>Gastronomia e Cafés</li>
                <li>Bem-estar e Saúde Mental</li>
              </ul>
            </div>
          </div>
        </Section>

        {/* 6. Parcerias de Sucesso */}
        <Section>
          <SectionHeader
            title="Parcerias de Sucesso"
            subtitle="Exemplos de colaborações com marcas que, assim como eu, valorizam a autenticidade e a conexão verdadeira."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <Link
                to={`/projetos/${project.id}`}
                key={project.id}
                className="group block border border-zinc-200/70 rounded-3xl bg-white/50 p-4 hover:bg-white hover:shadow-2xl hover:shadow-zinc-300/50 transition-all duration-300"
              >
                <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden mb-4">
                  <img
                    src={project.cover}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="font-bold text-lg text-zinc-900 px-2">
                  {project.title}
                </h3>
                <p className="text-sm text-zinc-500 px-2">{project.category}</p>
              </Link>
            ))}
          </div>
        </Section>

        {/* 7. Formatos de Parceria */}
        <Section>
          <SectionHeader
            title="Formatos de Parceria"
            subtitle="Soluções de conteúdo criadas para integrar sua marca de forma orgânica e relevante à minha comunidade."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Publicação no Feed (Reel/Foto)',
              'Sequência de Stories (com link)',
              'Projetos Especiais e Co-criação',
              'Presença em Eventos',
              'Marketing de Afiliados (Cupons)',
              'Conteúdo para Marca (UGC)',
            ].map((service) => (
              <div
                key={service}
                className="p-6 border border-zinc-200/70 rounded-2xl bg-white/50 text-center"
              >
                <span className="text-lg font-medium text-zinc-800">
                  {service}
                </span>
              </div>
            ))}
          </div>
        </Section>

        {/* 8. Números e Engajamento */}
        <Section>
          <SectionHeader
            title="Números e Engajamento"
            subtitle="Dados que refletem o alcance e a conexão genuína que construí com minha comunidade."
          />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard value="15.7k" label="Seguidores no Instagram" />
            <StatCard value="5.8%" label="Taxa de Engajamento" />
            <StatCard value="+50k" label="Alcance Médio (Reels)" />
            <StatCard value="+500k" label="Impressões Mensais" />
          </div>
        </Section>

        {/* 9. O que as Marcas Dizem */}
        <Section>
          <SectionHeader
            title="O que as Marcas Dizem"
            subtitle="Feedbacks de parceiros que confiaram no meu trabalho para se conectar com o público."
          />
          <div className="bg-white/50 border border-zinc-200/70 rounded-3xl p-8 md:p-12 text-center">
            <blockquote className="text-xl md:text-2xl text-zinc-700 max-w-3xl mx-auto leading-relaxed">
              “A parceria com a Nathália foi um sucesso! Sua comunicação
              autêntica e a conexão com o público trouxeram resultados
              incríveis para nossa campanha.”
            </blockquote>
            <p className="font-bold text-zinc-900 mt-6">Equipe Glam Beauty</p>
            <p className="text-sm text-zinc-500">Marca Parceira</p>
          </div>
        </Section>

        {/* 10. Contato */}
        <Section>
          <div className="bg-zinc-900 text-white rounded-3xl p-8 md:p-16 text-center">
            <h2 className="font-playfair text-4xl md:text-5xl">
              Vamos construir juntos?
            </h2>
            <p className="text-lg text-zinc-300 mt-6 max-w-3xl mx-auto leading-relaxed">
              Se sua marca valoriza a autenticidade e busca uma conexão real
              com o público, vamos conversar sobre uma parceria.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
              <a
                href="https://www.instagram.com/nanathsday/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white hover:text-zinc-300 transition-colors"
              >
                <FaInstagram size={20} />
                <span>Instagram</span>
              </a>
              <a
                href="https://www.linkedin.com/in/nathaliaverri/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white hover:text-zinc-300 transition-colors"
              >
                <FaLinkedin size={20} />
                <span>LinkedIn</span>
              </a>
              <a
                href="mailto:contato@nathaliaverri.com.br"
                className="flex items-center gap-2 text-white hover:text-zinc-300 transition-colors"
              >
                <Mail size={20} />
                <span>E-mail</span>
              </a>
              <a
                href="https://wa.me/5511999999999" // <-- SUBSTITUA PELO SEU NÚMERO
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white hover:text-zinc-300 transition-colors"
              >
                <Phone size={20} />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </Section>
      </main>
      <ScrollToTopButton />
    </div>
  );
};

export default MidiaKit;