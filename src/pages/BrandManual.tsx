import {
  ArrowDown,
  Feather,
  Heart,
  TrendingUp,
  Sparkles,
} from 'lucide-react';
import { motion, type Variants } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import profileImage from '../assets/1.jpeg';
import manual1 from '../assets/manual_1.png';
import manual2 from '../assets/manual_2.png';
import manual3 from '../assets/manual_3.png';
import ScrollToTopButton from '../components/ScrollToTopButton';

// --- Helper Components ---

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
  <div className="mb-12 text-center md:text-left">
    <h2 className="font-playfair text-5xl md:text-6xl text-zinc-900 tracking-tight">
      {title}
    </h2>
    <p className="mt-3 text-base text-zinc-500 max-w-xl mx-auto md:mx-0">
      {subtitle}
    </p>
  </div>
);

const ColorCard = ({
  hex,
  name,
  application,
}: {
  hex: string;
  name: string;
  application: string;
}) => (
  <div className="border border-zinc-200/70 rounded-3xl bg-white/50 p-6">
    <div
      className="h-32 w-full rounded-2xl mb-4"
      style={{ backgroundColor: hex }}
    />
    <h3 className="font-bold text-lg text-zinc-900">{name}</h3>
    <p className="text-sm text-zinc-500 mb-2">{hex.toUpperCase()}</p>
    <p className="text-sm text-zinc-600">{application}</p>
  </div>
);

const TypographySpecimen = ({
  category,
  fontName,
  fontWeight,
  exampleText,
  description,
  className,
}: {
  category: string;
  fontName: string;
  fontWeight: string;
  exampleText: string;
  description: string;
  className: string;
}) => (
  <div className="border-t border-zinc-200/70 pt-8">
    <div className="flex justify-between items-baseline mb-4">
      <h3 className="font-bold text-xl text-zinc-900">{category}</h3>
      <span className="text-sm text-zinc-500">
        {fontName} • {fontWeight}
      </span>
    </div>
    <p className={`text-zinc-800 break-words ${className}`}>{exampleText}</p>
    <p className="text-sm text-zinc-600 mt-4">{description}</p>
  </div>
);

const BrandManual = () => {
  const navigate = useNavigate();

  const handleNavigateToContact = () => {
    navigate('/');
  };

  const pillarIconProps = {
    size: 24,
    className: 'text-zinc-500',
    strokeWidth: 1.5,
  };

  return (
    <div className="bg-[#F7F5F2] font-inter text-zinc-800 antialiased">
      <main className="max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-32 space-y-24 md:space-y-32">
        {/* 1. Hero / Conceito da Marca */}
        <Section className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[70vh]">
          <div className="relative z-10 text-center lg:text-left">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="font-playfair text-6xl sm:text-7xl md:text-8xl text-zinc-900 leading-none tracking-tighter"
            >
              Nathália Verri
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
              className="mt-4 text-lg md:text-xl text-zinc-600"
            >
              Marketing & Comunicação Estratégica
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
              className="mt-8 max-w-lg mx-auto lg:mx-0 text-zinc-700 leading-relaxed"
            >
              Uma marca pessoal que une estratégia e criatividade para construir
              pontes entre marcas e pessoas, através de uma comunicação
              autêntica e orientada a resultados.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
              className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-lg mx-auto lg:mx-0"
            >
              <div className="text-center flex flex-col items-center">
                <Sparkles {...pillarIconProps} />
                <span className="mt-2 text-sm font-medium">Estratégia</span>
              </div>
              <div className="text-center flex flex-col items-center">
                <Feather {...pillarIconProps} />
                <span className="mt-2 text-sm font-medium">Criatividade</span>
              </div>
              <div className="text-center flex flex-col items-center">
                <Heart {...pillarIconProps} />
                <span className="mt-2 text-sm font-medium">Conexão</span>
              </div>
              <div className="text-center flex flex-col items-center">
                <TrendingUp {...pillarIconProps} />
                <span className="mt-2 text-sm font-medium">Resultados</span>
              </div>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative h-[400px] lg:h-auto lg:absolute lg:top-0 lg:right-0 lg:w-1/2 lg:h-full"
          >
            <img
              src={profileImage}
              alt="Nathália Verri"
              className="w-full h-full object-cover rounded-3xl lg:rounded-l-3xl lg:rounded-r-none"
            />
            <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#F7F5F2] via-[#F7F5F2]/50 to-transparent" />
          </motion.div>
        </Section>

        {/* 2. Logo */}
        <Section className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
          <div className="md:col-span-1 text-center">
            <div className="inline-block bg-white p-12 rounded-3xl border border-zinc-200/70">
              <span className="font-playfair text-8xl text-zinc-800">NV.</span>
            </div>
          </div>
          <div className="md:col-span-2">
            <SectionHeader
              title="Logo"
              subtitle="O monograma 'NV' é a representação visual da marca. Ele combina as iniciais de Nathália Verri em uma forma que é ao mesmo tempo clássica e moderna."
            />
            <p className="text-zinc-700 leading-relaxed max-w-xl">
              A tipografia serifada confere elegância e autoridade, enquanto a
              simplicidade do arranjo garante legibilidade e um toque
              minimalista. O logo reflete uma abordagem profissional, pessoal e
              atemporal.
            </p>
          </div>
        </Section>

        {/* 3. Paleta de Cores */}
        <Section>
          <SectionHeader
            title="Paleta de Cores"
            subtitle="Uma paleta neutra e sofisticada, que transmite calma e profissionalismo, com um ponto de cor que adiciona personalidade."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            <ColorCard
              hex="#F7F5F2"
              name="Off-White"
              application="Cor de base para fundos, garantindo um visual limpo e editorial."
            />
            <ColorCard
              hex="#EAEAEA"
              name="Cinza Pérola"
              application="Para bordas, separadores e fundos secundários sutis."
            />
            <ColorCard
              hex="#1C1C1C"
              name="Grafite Profundo"
              application="Usada em títulos principais para máximo contraste e impacto."
            />
            <ColorCard
              hex="#555555"
              name="Cinza Tipográfico"
              application="Ideal para corpo de texto, oferecendo excelente legibilidade."
            />
            <ColorCard
              hex="#6D8C9C"
              name="Azul Acinzentado"
              application="Cor de destaque para links, botões e elementos interativos."
            />
          </div>
        </Section>

        {/* 4. Tipografia */}
        <Section>
          <SectionHeader
            title="Tipografia"
            subtitle="A combinação de uma fonte serifada e uma sans-serif cria uma hierarquia clara, equilibrando elegância com modernidade e legibilidade."
          />
          <div className="space-y-12 bg-white/50 border border-zinc-200/70 rounded-3xl p-8 md:p-12">
            <TypographySpecimen
              category="Títulos"
              fontName="Cormorant Garamond"
              fontWeight="Regular"
              exampleText="A Estratégia que Conecta"
              description="Usada para títulos e destaques, transmitindo sofisticação, autoridade e um toque editorial clássico."
              className="font-playfair text-5xl md:text-6xl"
            />
            <TypographySpecimen
              category="Subtítulos"
              fontName="Inter"
              fontWeight="Medium"
              exampleText="Comunicação com Propósito"
              description="Para subtítulos e chamadas, usando um peso maior da fonte Inter para criar contraste e guiar o leitor."
              className="text-2xl md:text-3xl font-medium"
            />
            <TypographySpecimen
              category="Textos"
              fontName="Inter"
              fontWeight="Regular"
              exampleText="O corpo de texto é o pilar da comunicação clara e acessível. A fonte Inter foi escolhida por sua excelente legibilidade em telas digitais, garantindo uma experiência de leitura confortável e agradável em qualquer dispositivo."
              description="Ideal para parágrafos e textos longos, garantindo máxima clareza e um tom contemporâneo."
              className="text-base leading-relaxed"
            />
          </div>
        </Section>

        {/* 5. Elementos Visuais */}
        <Section>
          <SectionHeader
            title="Elementos Visuais"
            subtitle="Detalhes sutis que constroem uma experiência visual coesa, moderna e organizada."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-8 border border-zinc-200/70 rounded-3xl bg-white/50 text-center flex flex-col items-center justify-center aspect-square">
              <div className="w-24 h-24 rounded-full border-2 border-dashed border-zinc-300 mb-4" />
              <h3 className="font-bold text-zinc-900">Cantos Arredondados</h3>
              <p className="text-sm text-zinc-600 mt-1">
                Suavidade e modernidade em cards e imagens.
              </p>
            </div>
            <div className="p-8 border border-zinc-200/70 rounded-3xl bg-white/50 text-center flex flex-col items-center justify-center aspect-square">
              <div className="w-full h-px bg-zinc-300 mb-4" />
              <h3 className="font-bold text-zinc-900">Linhas Finas</h3>
              <p className="text-sm text-zinc-600 mt-1">
                Separadores elegantes para organizar o conteúdo.
              </p>
            </div>
            <div className="p-8 border border-zinc-200/70 rounded-3xl bg-white/50 text-center flex flex-col items-center justify-center aspect-square">
              <Feather
                size={32}
                strokeWidth={1.5}
                className="text-zinc-500 mb-4"
              />
              <h3 className="font-bold text-zinc-900">Ícones Minimalistas</h3>
              <p className="text-sm text-zinc-600 mt-1">
                Comunicação visual rápida, limpa e elegante.
              </p>
            </div>
            <div className="p-8 border border-zinc-200/70 rounded-3xl bg-white/50 text-center flex flex-col items-center justify-center aspect-square">
              <div className="w-1/2 h-1/2 border-l border-t border-zinc-300" />
              <h3 className="font-bold text-zinc-900 mt-4">
                Layout Editorial
              </h3>
              <p className="text-sm text-zinc-600 mt-1">
                Grid e espaço em branco para um visual premium.
              </p>
            </div>
          </div>
        </Section>

        {/* 6. Direção Fotográfica
        <Section>
          <SectionHeader
            title="Direção Fotográfica"
            subtitle="As imagens devem refletir profissionalismo e autenticidade, com uma estética limpa e editorial."
          />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            <img
              src="https://placehold.co/600x800/EAEAEA/555555?text=Portrait"
              className="aspect-[3/4] w-full h-full object-cover rounded-2xl"
            />
            <img
              src="https://placehold.co/600x800/6D8C9C/FFFFFF?text=Detail"
              className="aspect-[3/4] w-full h-full object-cover rounded-2xl"
            />
            <img
              src="https://placehold.co/600x800/F7F5F2/555555?text=Workspace"
              className="aspect-[3/4] w-full h-full object-cover rounded-2xl"
            />
            <img
              src="https://placehold.co/600x800/1C1C1C/FFFFFF?text=Lifestyle"
              className="aspect-[3/4] w-full h-full object-cover rounded-2xl"
            />
          </div>
          <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4 text-zinc-700 list-disc list-inside">
            <li>Luz natural e suave</li>
            <li>Tons neutros com o Azul Acinzentado</li>
            <li>Estética editorial e limpa</li>
            <li>Ambientes sofisticados e organizados</li>
            <li>Foco em pessoas, detalhes e processos</li>
            <li>Composição minimalista</li>
          </ul>
        </Section> */}

        {/* 7. Tom de Voz */}
        <Section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeader
              title="Tom de Voz"
              subtitle="A comunicação da marca é a base para construir confiança e conexão."
            />
            <p className="text-zinc-700 leading-relaxed max-w-xl">
              A voz da marca deve ser sempre clara, confiante e acessível,
              combinando conhecimento técnico com uma abordagem humana e
              inspiradora.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {['Profissional', 'Estratégico', 'Inspirador', 'Autêntico', 'Criativo', 'Acolhedor'].map((word) => (
              <div
                key={word}
                className="p-6 border border-zinc-200/70 rounded-2xl bg-white/50 text-center"
              >
                <span className="text-lg font-medium text-zinc-800">
                  {word}
                </span>
              </div>
            ))}
          </div>
        </Section>

        {/* 8. Palavras-chave da Marca */}
        <Section>
          <SectionHeader
            title="Palavras-Chave"
            subtitle="Termos que definem o universo e a expertise da marca."
          />
          <div className="flex flex-wrap gap-3 justify-center">
            {[
              'Estratégia', 'Comunicação', 'Marketing', 'Branding', 'Conteúdo',
              'Criatividade', 'Performance', 'Resultados', 'Conexão', 'Inovação',
            ].map((tag) => (
              <span
                key={tag}
                className="bg-white border border-zinc-200/80 text-zinc-700 text-sm font-medium px-4 py-2 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </Section>

        {/* 9. Aplicações da Marca */}
        <Section>
          <SectionHeader
            title="Aplicações da Marca"
            subtitle="A identidade visual em ação, mantendo a consistência em diferentes pontos de contato."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="rounded-3xl p-6 bg-zinc-100/70 border border-zinc-200/60 flex items-center justify-center aspect-square">
              <img src={manual1} alt="Mockup Website" className="w-full h-full object-contain" />
            </div>
            <div className="rounded-3xl p-6 bg-zinc-100/70 border border-zinc-200/60 flex items-center justify-center aspect-square">
              <img src={manual2} alt="Mockup Smartphone" className="w-full h-full object-contain" />
            </div>
            <div className="rounded-3xl p-6 bg-zinc-100/70 border border-zinc-200/60 flex items-center justify-center aspect-square">
              <img src={manual3} alt="Mockup Social Media" className="w-full h-full object-contain" />
            </div>
          </div>
        </Section>

        {/* 10. Hierarquia Tipográfica */}
        <Section>
          <SectionHeader
            title="Hierarquia Tipográfica"
            subtitle="Exemplos práticos de como a tipografia deve ser aplicada para garantir clareza e consistência."
          />
          <div className="bg-white/50 border border-zinc-200/70 rounded-3xl p-8 md:p-12 space-y-10">
            <div>
              <p className="text-sm text-zinc-500 uppercase tracking-widest">H1</p>
              <h1 className="font-playfair text-5xl md:text-6xl text-zinc-900 mt-1">Título Principal</h1>
            </div>
            <div className="h-px bg-zinc-200/70" />
            <div>
              <p className="text-sm text-zinc-500 uppercase tracking-widest">H2</p>
              <h2 className="font-playfair text-4xl md:text-5xl text-zinc-800 mt-1">Título de Seção</h2>
            </div>
            <div className="h-px bg-zinc-200/70" />
            <div>
              <p className="text-sm text-zinc-500 uppercase tracking-widest">H3</p>
              <h3 className="text-2xl md:text-3xl font-medium text-zinc-800 mt-1">Subtítulo Informativo</h3>
            </div>
            <div className="h-px bg-zinc-200/70" />
            <div>
              <p className="text-sm text-zinc-500 uppercase tracking-widest">Parágrafo</p>
              <p className="text-zinc-700 leading-relaxed mt-2 max-w-3xl">
                Este é um parágrafo de exemplo que demonstra a legibilidade e a estética do corpo de texto. A fonte Inter, com seu design limpo e moderno, garante uma experiência de leitura agradável em qualquer dispositivo.
              </p>
            </div>
            <div className="h-px bg-zinc-200/70" />
            <div>
              <p className="text-sm text-zinc-500 uppercase tracking-widest">Botões</p>
              <div className="flex flex-wrap gap-4 mt-4">
                <button className="px-6 py-3 bg-zinc-900 text-white rounded-full text-sm font-medium">
                  Ação Principal
                </button>
                <button className="px-6 py-3 bg-transparent text-zinc-800 rounded-full text-sm font-medium border border-zinc-300">
                  Ação Secundária
                </button>
              </div>
            </div>
          </div>
        </Section>

        {/* 11. Resumo da Marca */}
        <Section>
          <div className="bg-white/50 border border-zinc-200/70 rounded-3xl p-8 md:p-16 text-center">
            <h2 className="font-playfair text-4xl md:text-5xl text-zinc-900">
              Posicionamento e Valores
            </h2>
            <p className="text-lg text-zinc-700 mt-6 max-w-4xl mx-auto leading-relaxed">
              A marca Nathália Verri se posiciona como uma parceira estratégica
              que traduz objetivos de negócio em comunicação criativa e
              impactante. Os diferenciais são a abordagem personalizada, o foco
              em dados para embasar a criatividade e a construção de narrativas
              autênticas.
            </p>
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-2xl mx-auto">
              <div className="text-left">
                <h4 className="font-bold text-zinc-900">Objetivos</h4>
                <p className="text-zinc-600 mt-1">
                  Gerar crescimento sustentável para marcas através de um
                  branding forte e conteúdo relevante.
                </p>
              </div>
              <div className="text-left">
                <h4 className="font-bold text-zinc-900">Valores</h4>
                <p className="text-zinc-600 mt-1">
                  Estratégia, Criatividade, Transparência, Conexão e Excelência.
                </p>
              </div>
            </div>
            <button
              onClick={handleNavigateToContact}
              className="mt-12 px-8 py-4 bg-zinc-900 text-white rounded-full flex items-center justify-center gap-2 mx-auto hover:scale-105 transition-transform duration-300 font-medium"
            >
              Vamos construir juntos <ArrowDown size={16} className="hidden" />
            </button>
          </div>
        </Section>
      </main>
      <ScrollToTopButton />
    </div>
  );
};

export default BrandManual;