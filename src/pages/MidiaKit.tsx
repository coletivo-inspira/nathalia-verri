import React from "react";
import { motion, MotionValue, type Variants } from "framer-motion";
import {
  Mail,
  Sparkles,
  Users,
  Coffee,
  Heart,
  Plane,
  Shirt,
  Briefcase,
  MessageSquare,
  PencilRuler,
  ThumbsUp,
  Rocket,
  MessageCircle,
  Send,
  Bookmark,
} from "lucide-react";
import { FaInstagram, FaTiktok } from "react-icons/fa";
import { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";
import { ChevronLeft, MoreHorizontal, Grid, Film, UserSquare } from "lucide-react";

// Importações (Ajuste os caminhos conforme a estrutura do seu projeto)
import { creatorLinks } from "../data/links";
import heroImage from "../assets/1.jpeg"; // Imagem principal do portfólio
import nanathsdayProfileImage from "../assets/partnership_image.jpg"; // Imagem de perfil da persona "nanathsday"
import moodboardImg1 from "../assets/instagram_1.png";
import moodboardImg2 from "../assets/instagram_2.png";
import moodboardImg3 from "../assets/instagram_3.png";
import moodboardImg4 from "../assets/instagram_4.png";
import moodboardImg5 from "../assets/instagram_5.png";
import moodboardImg6 from "../assets/instagram_6.png";
import moodboardImg7 from "../assets/instagram_7.png";
import moodboardImg8 from "../assets/instagram_8.png";
import moodboardImg9 from "../assets/instagram_9.png";
import moodboard1 from "../assets/nanaths-day-2.mp4";
import moodboard2 from "../assets/nanaths-day-3.mp4";
import moodboard3 from "../assets/nanaths-day-15.mp4";
import ScrollToTopButton from "../components/ScrollToTopButton";

// --- ANIMAÇÕES ---
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" }
  }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

// --- COMPONENTES BASE ---
const Card = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <motion.div
    variants={fadeUp}
    className={`bg-white rounded-3xl border border-zinc-200 shadow-sm p-8 ${className}`}
  >
    {children}
  </motion.div>
);

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-5xl font-black text-zinc-900 mb-12">
    <span className="font-playfair">{children}</span>
  </h2>
);

export default function MidiaKit() {
  return (
    <div className="min-h-screen bg-[#F7F5F2] text-zinc-800 font-inter antialiased selection:bg-[#6D8C9C] selection:text-white">

      {/* 1. HERO */}
      <section className="max-w-7xl mx-auto px-6 py-20 lg:py-32">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-14 items-center"
        >
          <div className="order-2 lg:order-1">

            <h1 className="font-playfair text-5xl sm:text-7xl lg:text-8xl text-zinc-900 mt-6 leading-tight tracking-tighter">
              nanathsday
            </h1>

            <p className="text-lg md:text-xl font-medium text-zinc-600 mt-6">
              Marca Pessoal & Content Creation • Lifestyle • Beleza
            </p>

            <p className="mt-4 text-base md:text-lg text-zinc-500 leading-relaxed max-w-lg">
              Estratégia de influência, curadoria visual e storytelling pessoal. Onde transformo minha rotina em conexão real com a comunidade.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-10">
              <a href="#contato" className="bg-zinc-900 text-white px-8 py-4 rounded-full font-semibold hover:scale-105 transition-transform text-center">
                Trabalhar comigo
              </a>
              <a href="#plataformas" className="border border-zinc-300 px-8 py-4 rounded-full font-semibold text-zinc-900 hover:bg-white transition-colors text-center">
                Ver Plataformas
              </a>
            </div>
          </div>

          <motion.div whileHover={{ scale: 1.02 }} className="relative order-1 lg:order-2">
            <img
              src={heroImage}
              alt="Nathália Verri"
              className="rounded-3xl w-full max-h-[600px] object-cover shadow-xl"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* 2. SOBRE MIM & NICHOS */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <SectionTitle>Sobre Mim</SectionTitle>
        <div className="grid lg:grid-cols-3 gap-6">
          <Card className="lg:col-span-2">
            <p className="text-base md:text-lg leading-relaxed md:leading-9 text-zinc-600">
              O <strong>nanathsday</strong> nasceu como um laboratório criativo e se tornou minha vitrine de marca pessoal. É o espaço onde aplico na prática tudo o que acredito sobre criação de comunidade, autenticidade e tendências digitais.
              <br /><br />
              Do roteiro dos Reels à curadoria estética do feed, o foco é construir um lifestyle magnético que inspire e gere identificação genuína, mostrando que os bastidores também são conteúdo de alto valor.
            </p>
          </Card>

          <Card className="bg-zinc-900 text-white border-none flex flex-col justify-center">
            <h3 className="font-bold text-2xl mb-6">Meus Pilares</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3"><Sparkles size={20} className="text-[#6D8C9C]" /> Beleza & Autocuidado</li>
              <li className="flex items-center gap-3"><Coffee size={20} className="text-[#6D8C9C]" /> Lifestyle & Rotina</li>
              <li className="flex items-center gap-3"><Plane size={20} className="text-[#6D8C9C]" /> Viagens & Experiências</li>
              <li className="flex items-center gap-3"><Shirt size={20} className="text-[#6D8C9C]" /> Moda & Estilo</li>
            </ul>
          </Card>
        </div>
      </section>

      {/* 3. PÚBLICO */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <SectionTitle>Meu Público</SectionTitle>
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <Users className="mb-5 text-zinc-400" size={32} />
            <h3 className="text-3xl sm:text-4xl font-black">Feminino</h3>
            <p className="text-zinc-500 mt-2">Maior Público (92,8%)</p>
          </Card>
          <Card>
            <Heart className="mb-5 text-zinc-400" size={32} />
            <h3 className="text-3xl sm:text-4xl font-black">18-34</h3>
            <p className="text-zinc-500 mt-2">Faixa Etária Principal (72,9%)</p>
          </Card>
          <Card>
            <Briefcase className="mb-5 text-zinc-400" size={32} />
            <h3 className="text-3xl sm:text-4xl font-black">Sudeste</h3>
            <p className="text-zinc-500 mt-2">SP, RJ e BH (MG)</p>
          </Card>
          <Card>
            <Sparkles className="mb-5 text-zinc-400" size={32} />
            <h3 className="text-3xl sm:text-4xl font-black">Lifestyle</h3>
            <p className="text-zinc-500 mt-2">Principal Interesse</p>
          </Card>
        </motion.div>
      </section>

      {/* 4. PLATAFORMAS */}
      <section id="plataformas" className="max-w-7xl mx-auto px-6 pb-24">
        <SectionTitle>Plataformas & Entregas</SectionTitle>

        <div className="space-y-8">

          {/* Módulo INSTAGRAM */}
          <Card className="p-0 overflow-hidden">
            <div className="p-8 lg:p-12">
              <div className="flex items-center justify-between mb-10">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-zinc-800 rounded-2xl flex items-center justify-center text-white">
                    <FaInstagram size={32} />
                  </div>
                  <div>
                    <h3 className="text-3xl font-black text-zinc-900">Instagram</h3>
                    <a href="https://instagram.com/nanathsday" target="_blank" rel="noopener noreferrer" className="text-[#6D8C9C] font-medium hover:underline">@nanathsday</a>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-12">
                {/* Métricas e Resultados */}
                <div>
                  <h4 className="text-sm font-bold text-zinc-400 uppercase tracking-wider mb-6">Métricas de Desempenho</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <p className="text-3xl md:text-4xl font-black text-zinc-900">12.65K</p>
                      <span className="text-zinc-500">Seguidores</span>
                    </div>
                    <div>
                      <p className="text-3xl md:text-4xl font-black text-zinc-900">17.5%</p>
                      <span className="text-zinc-500">Engajamento</span>
                    </div>
                    <div>
                      <p className="text-3xl md:text-4xl font-black text-zinc-900">+33K</p>
                      <span className="text-zinc-500">Visualizações (Últimos 30 dias)</span>
                    </div>
                    <div>
                      <p className="text-3xl md:text-4xl font-black text-zinc-900">1.7K</p>
                      <span className="text-zinc-500">Views Stories</span>
                    </div>
                  </div>

                  <div className="mt-8 pt-8 border-t border-zinc-100 grid grid-cols-3 gap-4">
                    <div>
                      <p className="font-black text-zinc-900 text-lg">100%</p>
                      <p className="text-xs text-zinc-500 font-medium">Crescimento orgânico</p>
                    </div>
                    <div>
                      <p className="font-black text-zinc-900 text-lg">Alto</p>
                      <p className="text-xs text-zinc-500 font-medium">Engajamento nos stories</p>
                    </div>
                    <div>
                      <p className="font-black text-zinc-900 text-lg">Vitrine</p>
                      <p className="text-xs text-zinc-500 font-medium">Portfólio vivo</p>
                    </div>
                  </div>
                </div>

                {/* Formatos */}
                <div className="bg-[#fafafa] rounded-2xl p-6 border border-zinc-100 h-fit">
                  <h4 className="text-sm font-bold text-zinc-400 uppercase tracking-wider mb-4">Formatos de Entrega</h4>
                  <ul className="space-y-3 text-zinc-700 font-medium">
                    <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-[#6D8C9C]"></div> Reels Patrocinados (Roteiro e Edição)</li>
                    <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-[#6D8C9C]"></div> Sequência de Stories com Link</li>
                    <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-[#6D8C9C]"></div> Posts no Feed / Carrossel</li>
                    <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-[#6D8C9C]"></div> Cobertura de Eventos / Reviews</li>
                  </ul>
                </div>
              </div>
            </div>
          </Card>

          {/* Módulo TIKTOK */}
          <Card className="p-0 overflow-hidden">
            <div className="p-8 lg:p-12">
              <div className="flex items-center justify-between mb-10">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center text-white">
                    <FaTiktok size={32} />
                  </div>
                  <div>
                    <h3 className="text-3xl font-black text-zinc-900">TikTok</h3>
                    <a href="https://tiktok.com/@nanathsday" target="_blank" rel="noopener noreferrer" className="text-zinc-500 font-medium hover:underline">@nanathsday</a>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-12">
                {/* Métricas */}
                <div>
                  <h4 className="text-sm font-bold text-zinc-400 uppercase tracking-wider mb-6">Métricas de Desempenho</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <p className="text-3xl md:text-4xl font-black text-zinc-900">2.14K</p>
                      <span className="text-zinc-500">Seguidores</span>
                    </div>
                    <div>
                      <p className="text-3xl md:text-4xl font-black text-zinc-900">14.3%</p>
                      <span className="text-zinc-500">Engajamento</span>
                    </div>
                    <div>
                      <p className="text-3xl md:text-4xl font-black text-zinc-900">984</p>
                      <span className="text-zinc-500">Views Médias</span>
                    </div>
                  </div>
                </div>

                {/* Formatos */}
                <div className="bg-[#fafafa] rounded-2xl p-6 border border-zinc-100">
                  <h4 className="text-sm font-bold text-zinc-400 uppercase tracking-wider mb-4">Formatos de Entrega</h4>
                  <ul className="space-y-3 text-zinc-700 font-medium">
                    <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-[#6D8C9C]"></div> Vídeos Nativos e Trends</li>
                    <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-[#6D8C9C]"></div> Conteúdo UGC para a Marca</li>
                    <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-[#6D8C9C]"></div> Unboxing & Reviews rápidos</li>
                  </ul>
                </div>
              </div>
            </div>
          </Card>

        </div>
      </section>

      {/* 5. PROJETOS / PORTFÓLIO */}
      {creatorLinks && creatorLinks.length > 0 && (
        <section className="max-w-7xl mx-auto px-6 pb-24">
          <SectionTitle>Parcerias Recentes</SectionTitle>
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {creatorLinks.map((link) => (
              <a href={link.url} key={link.title} target="_blank" rel="noopener noreferrer" className="group block">
                <Card className="!p-3 hover:border-zinc-300 transition-colors flex flex-col h-full">
                  <div className="w-full aspect-square rounded-xl overflow-hidden mb-3 bg-zinc-100 flex items-center justify-center p-3">
                    <img src={link.image} alt={link.title} className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="mt-auto text-center">
                    <h3 className="font-black text-base text-zinc-900 truncate" title={link.title}>{link.title}</h3>
                  </div>
                </Card>
              </a>
            ))}
          </motion.div>
        </section>
      )}

      {/* 6. O PROCESSO CRIATIVO */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <SectionTitle>Como Funciona?</SectionTitle>
        <p className="text-zinc-500 mb-12 text-base md:text-lg max-w-2xl leading-relaxed">
          Meu processo é transparente e desenhado para garantir que a mensagem da sua marca seja entregue com a minha essência, sem ruídos.
        </p>

        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-6 text-zinc-100 font-black text-8xl -z-10 group-hover:scale-110 transition-transform">1</div>
            <MessageSquare className="mb-6 text-[#6D8C9C]" size={32} />
            <h3 className="font-bold text-xl mb-3">Briefing</h3>
            <p className="text-zinc-500 text-sm leading-relaxed">Alinhamento de expectativas, estudo do produto e definição dos KPIs da campanha.</p>
          </Card>

          <Card className="relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-6 text-zinc-100 font-black text-8xl -z-10 group-hover:scale-110 transition-transform">2</div>
            <PencilRuler className="mb-6 text-[#6D8C9C]" size={32} />
            <h3 className="font-bold text-xl mb-3">Criação</h3>
            <p className="text-zinc-500 text-sm leading-relaxed">Desenvolvimento de roteiro, moodboard e planejamento estético do conteúdo.</p>
          </Card>

          <Card className="relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-6 text-zinc-100 font-black text-8xl -z-10 group-hover:scale-110 transition-transform">3</div>
            <ThumbsUp className="mb-6 text-[#6D8C9C]" size={32} />
            <h3 className="font-bold text-xl mb-3">Aprovação</h3>
            <p className="text-zinc-500 text-sm leading-relaxed">Envio do material para validação da marca antes de qualquer publicação.</p>
          </Card>

          <Card className="relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-6 text-zinc-100 font-black text-8xl -z-10 group-hover:scale-110 transition-transform">4</div>
            <Rocket className="mb-6 text-[#6D8C9C]" size={32} />
            <h3 className="font-bold text-xl mb-3">Publicação</h3>
            <p className="text-zinc-500 text-sm leading-relaxed">Postagem nos horários de pico da comunidade e envio de relatório de métricas.</p>
          </Card>
        </motion.div>
      </section>

      {/* 7. PROVA SOCIAL / DEPOIMENTO */}
      {/* <section className="max-w-7xl mx-auto px-6 pb-24">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <div className="bg-white border border-zinc-200 rounded-3xl p-10 md:p-16 text-center shadow-sm relative">
            <Quote className="mx-auto mb-6 text-zinc-200" size={64} />
            <blockquote className="text-2xl md:text-3xl font-medium text-zinc-800 max-w-4xl mx-auto leading-snug">
              "A entrega superou nossas expectativas. O conteúdo ficou extremamente orgânico, com uma estética impecável e gerou um pico de engajamento no nosso perfil no dia da postagem."
            </blockquote>
            <p className="font-black text-zinc-900 mt-8 tracking-wide uppercase text-sm">Marca Parceira</p>
            <p className="text-zinc-500 text-sm mt-1">Campanha de Lançamento</p>
          </div>
        </motion.div>
      </section> */}

      {/* 8. MOODBOARD VISUAL */}
      {/* <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="flex justify-between items-end mb-12">
          <SectionTitle>Moodboard & Estética</SectionTitle>
          <a href="https://instagram.com/nanathsday" target="_blank" rel="noopener noreferrer" className="hidden md:block mb-12 font-semibold text-[#6D8C9C] hover:underline">
            Ver feed completo &rarr;
          </a>
        </div>
        
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="aspect-square rounded-3xl overflow-hidden bg-zinc-200">
            <img src={profileImage} alt="Foto de Nathália em um ambiente de trabalho com um notebook" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
          </div>
          <div className="aspect-square rounded-3xl overflow-hidden bg-zinc-200 md:translate-y-6">
            <img src={moodboardImg2} alt="Foto de Nathália em um café" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
          </div>
          <div className="aspect-square rounded-3xl overflow-hidden bg-zinc-200">
            <img src={moodboardImg3} alt="Detalhe de um look com bolsa e acessórios" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
          </div>
          <div className="aspect-square rounded-3xl overflow-hidden bg-zinc-200 md:translate-y-6">
            <img src={moodboardImg4} alt="Mockup de um celular exibindo um perfil de rede social" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
          </div>
        </motion.div>
      </section> */}
      <MoodboardSection />

      {/* 9. CONTATO */}
      <section id="contato" className="max-w-7xl mx-auto px-4 md:px-6 pb-24">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <div className="rounded-[2rem] md:rounded-3xl bg-zinc-900 text-white p-6 sm:p-8 md:p-12 lg:p-20 text-center">

            <h2 className="text-3xl md:text-5xl font-black leading-tight">
              Vamos criar algo <br className="block sm:hidden" /> incrível juntos?
            </h2>

            <p className="mt-4 md:mt-6 text-sm md:text-xl text-zinc-300 max-w-3xl mx-auto leading-relaxed md:leading-9">
              Estou disponível para campanhas, criação de conteúdo, UGC, eventos, lançamentos, restaurantes, hotéis e projetos especiais.
            </p>

            {/* Alterado para grid-cols-3 em TODAS as telas. Gap reduzido para gap-2 no mobile */}
            <div className="grid grid-cols-3 gap-2 md:gap-6 mt-8 md:mt-14">

              {/* Card 1: Instagram */}
              <a href="https://instagram.com/nanathsday" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-white/20 transition-colors rounded-xl md:rounded-3xl p-3 md:p-8 border border-white/5 flex flex-col items-center justify-center">
                <FaInstagram className="w-5 h-5 sm:w-6 sm:h-6 md:w-9 md:h-9 mb-2 md:mb-5 text-zinc-400" />
                <h3 className="font-bold text-[10px] sm:text-xs md:text-xl">Instagram</h3>
                <p className="text-zinc-300 mt-0.5 md:mt-2 text-[8px] sm:text-[10px] md:text-base truncate w-full text-center">@nanathsday</p>
              </a>

              {/* Card 2: TikTok */}
              <a href="https://tiktok.com/@nanathsday" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-white/20 transition-colors rounded-xl md:rounded-3xl p-3 md:p-8 border border-white/5 flex flex-col items-center justify-center">
                <FaTiktok className="w-5 h-5 sm:w-6 sm:h-6 md:w-9 md:h-9 mb-2 md:mb-5 text-zinc-400" />
                <h3 className="font-bold text-[10px] sm:text-xs md:text-xl">TikTok</h3>
                <p className="text-zinc-300 mt-0.5 md:mt-2 text-[8px] sm:text-[10px] md:text-base truncate w-full text-center">@nanathsday</p>
              </a>

              {/* Card 3: E-mail */}
              <a href="mailto:contato@nanathsday.com" className="bg-white/10 hover:bg-white/20 transition-colors rounded-xl md:rounded-3xl p-3 md:p-8 border border-white/5 flex flex-col items-center justify-center">
                <Mail className="w-5 h-5 sm:w-6 sm:h-6 md:w-9 md:h-9 mb-2 md:mb-5 text-zinc-400" />
                <h3 className="font-bold text-[10px] sm:text-xs md:text-xl">E-mail</h3>
                <p className="text-zinc-300 mt-0.5 md:mt-2 text-[8px] sm:text-[10px] md:text-base truncate w-full text-center">contato@nanathsday.com</p>
              </a>

            </div>
          </div>
        </motion.div>
      </section>

      {/* 10. RODAPÉ */}
      <footer className="py-8 px-6 bg-black border-t border-white/10 flex flex-col items-center justify-center gap-5 text-center">


        {/* Copyright Simples */}
        <p className="text-zinc-500 text-xs">
          © {new Date().getFullYear()} Nathália Verri — Todos os direitos reservados.
        </p>

      </footer>

      <ScrollToTopButton />
    </div>
  );
}

export function MoodboardSection() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section ref={containerRef} className="relative h-[400vh] bg-[#F7F5F2] w-full">
      {/* O top-24 ou pt-24 ajuda a não colar no menu superior do site */}
      <div className="sticky top-0 pt-24 md:pt-0 h-screen w-full flex flex-col md:flex-row items-center justify-center max-w-7xl mx-auto px-4 md:px-6 gap-4 md:gap-16 pb-18">

        {/* Cabeçalho de Texto */}
        <div className="w-full md:w-1/2 flex flex-col items-center text-center md:items-start md:text-left z-20">
          <SectionTitle>Moodboard e Estética</SectionTitle>
          <a
            href="https://instagram.com/nanathsday"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-[#6D8C9C] hover:underline flex items-center gap-2 text-sm md:text-lg mb-4 md:mb-0"
          >
            Ver feed completo &rarr;
          </a>
        </div>

        {/* O iPhone Dinâmico (Dark Mode) */}
        <div className="w-full md:w-1/2 flex justify-center items-center z-10 pb-8 md:pb-0">
          <div
            className="relative bg-black rounded-[2rem] md:rounded-[3rem] border-[6px] md:border-[10px] border-zinc-900 overflow-hidden shadow-2xl flex-shrink-0
            h-[60vh] md:h-[75vh] max-h-[800px] aspect-[9/19.5]"
          >
            {/* Notch (A franja do iPhone) */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[35%] h-5 md:h-7 bg-zinc-900 rounded-b-xl md:rounded-b-2xl z-50"></div>

            {/* Fundo Falso do Instagram - Dark Mode */}
            <div className="absolute inset-0 bg-black text-white flex flex-col font-sans pt-8 md:pt-12">

              {/* Header do Insta */}
              <div className="flex justify-between items-center px-4 md:px-4 pb-2 md:pb-2 bg-black z-10">
                <ChevronLeft className="w-6 h-6 md:w-7 md:h-7 cursor-pointer text-white" />
                <span className="font-bold text-base md:text-lg tracking-tight flex items-center gap-1">
                  nanathsday
                </span>
                <MoreHorizontal className="w-6 h-6 md:w-7 md:h-7 cursor-pointer text-white" />
              </div>

              {/* Corpo Rolável Fake */}
              <div className="flex-1 overflow-hidden flex flex-col">
                {/* Status do Perfil */}
                <div className="flex items-center justify-between px-4 md:px-4 mb-2 md:mb-4 mt-1 md:mt-2">
                  {/* Foto com aro de Story */}
                  <div className="w-14 h-14 md:w-20 md:h-20 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 p-[2px] md:p-[3px] flex-shrink-0">
                    <div className="w-full h-full rounded-full border-[2px] md:border-[3px] border-black bg-zinc-800 overflow-hidden">
                      <img src={nanathsdayProfileImage} alt="Profile" className="w-full h-full object-cover" />
                    </div>
                  </div>
                  {/* Números proporcionais */}
                  <div className="flex gap-1.5 md:gap-4 text-center flex-1 justify-center ml-2 md:ml-4">
                    <div className="flex flex-col"><span className="font-bold text-[9px] md:text-lg leading-tight">75</span><span className="text-[8px] md:text-xs text-zinc-400">Posts</span></div>
                    <div className="flex flex-col"><span className="font-bold text-[9px] md:text-lg leading-tight">12,5 mil</span><span className="text-[8px] md:text-xs text-zinc-400">Followers</span></div>
                    <div className="flex flex-col"><span className="font-bold text-[9px] md:text-lg leading-tight">580</span><span className="text-[8px] md:text-xs text-zinc-400">Following</span></div>
                  </div>
                </div>

                {/* Biografia */}
                <div className="px-4 md:px-4 text-[9px] md:text-sm mb-2 md:mb-4 leading-snug">
                  <span className="font-bold block text-white">Nanath Verri | UGC Creator</span>
                  <p className="mb-0.5 md:mb-1 text-zinc-200">🎧 | 𝚛𝚘𝚖𝚊𝚗𝚝𝚒𝚌𝚒𝚣𝚒𝚗𝚐 𝚛𝚎𝚊𝚕 𝚕𝚒𝚏𝚎</p>
                  <p className="mb-0.5 md:mb-1 text-zinc-200">☕️ | 𝚖𝚒𝚗𝚍, 𝚋𝚘𝚍𝚢 & 𝚜𝚘𝚞𝚕</p>
                  <p className="mb-0.5 md:mb-1 text-zinc-200">✉️ | 𝚌𝚘𝚗𝚝𝚊𝚝𝚘𝚗𝚊𝚗𝚊𝚝𝚑𝚜𝚍𝚊𝚢@𝚐𝚖𝚊𝚒𝚕.𝚌𝚘𝚖</p>
                  <p className="mb-0.5 md:mb-1 text-zinc-200">🖇️ | 𝚜𝚊𝚟𝚎 𝚑𝚎𝚛𝚎 ↓</p>
                  <a href="https://nathaliaverri.inspira.dev.br/cupons" className="text-blue-400 font-semibold truncate block w-full">nathaliaverri.inspira.dev.br/cupons</a>
                </div>

                {/* Botões de Ação */}
                <div className="flex gap-1.5 md:gap-2 px-4 md:px-4 mb-2 md:mb-4">
                  <button className="flex-1 bg-zinc-900 hover:bg-zinc-800 text-white font-semibold py-1 md:py-1.5 rounded-md md:rounded-lg text-[10px] md:text-sm transition-colors">Seguindo</button>
                  <button className="flex-1 bg-zinc-900 hover:bg-zinc-800 text-white font-semibold py-1 md:py-1.5 rounded-md md:rounded-lg text-[10px] md:text-sm transition-colors">Mensagem</button>
                  <button className="w-7 md:w-8 bg-zinc-900 hover:bg-zinc-800 text-white font-semibold py-1 md:py-1.5 rounded-md md:rounded-lg text-sm flex items-center justify-center transition-colors">
                    <span className="block w-2 h-2 md:w-2.5 md:h-2.5 border-b-2 border-r-2 border-white transform rotate-45 -mt-0.5 md:-mt-1"></span>
                  </button>
                </div>

                {/* Abas do Feed */}
                <div className="flex justify-around border-t border-zinc-800">
                  <div className="flex-1 flex justify-center py-2 md:py-2.5 border-t-[1px] border-white -mt-[1px]">
                    <Grid className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                  <div className="flex-1 flex justify-center py-2 md:py-2.5">
                    <Film className="w-5 h-5 md:w-6 md:h-6 text-zinc-600" />
                  </div>
                  <div className="flex-1 flex justify-center py-2 md:py-2.5">
                    <UserSquare className="w-5 h-5 md:w-6 md:h-6 text-zinc-600" />
                  </div>
                </div>

                {/* Grid Fake Base */}
                <div className="grid grid-cols-3 gap-0.5 flex-1 bg-black">
                  <div className="bg-zinc-900 aspect-square"><img src={moodboardImg1} className="w-full h-full object-cover opacity-60" /></div>
                  <div className="bg-zinc-900 aspect-square"><img src={moodboardImg2} className="w-full h-full object-cover opacity-60" /></div>
                  <div className="bg-zinc-900 aspect-square"><img src={moodboardImg3} className="w-full h-full object-cover opacity-60" /></div>
                  <div className="bg-zinc-900 aspect-square"><img src={moodboardImg4} className="w-full h-full object-cover opacity-60" /></div>
                  <div className="bg-zinc-900 aspect-square"><img src={moodboardImg5} className="w-full h-full object-cover opacity-60" /></div>
                  <div className="bg-zinc-900 aspect-square"><img src={moodboardImg6} className="w-full h-full object-cover opacity-60" /></div>
                  <div className="bg-zinc-900 aspect-square"><img src={moodboardImg7} className="w-full h-full object-cover opacity-60" /></div>
                  <div className="bg-zinc-900 aspect-square"><img src={moodboardImg8} className="w-full h-full object-cover opacity-60" /></div>
                  <div className="bg-zinc-900 aspect-square"><img src={moodboardImg9} className="w-full h-full object-cover opacity-60" /></div>
                </div>
              </div>
            </div>

            {/* As animações de imagem surgindo por cima */}
            <AnimatedPost
              src={moodboard3}
              profileImage={nanathsdayProfileImage}
              isVideo={true}
              progress={scrollYProgress}
              startIn={0.05} endIn={0.15} startOut={0.25} endOut={0.35}
            />

            <AnimatedPost
              src={moodboard1}
              profileImage={nanathsdayProfileImage}
              isVideo={true}
              progress={scrollYProgress}
              startIn={0.35} endIn={0.45} startOut={0.55} endOut={0.65}
            />

            <AnimatedPost
              src={moodboard2}
              profileImage={nanathsdayProfileImage}
              isVideo={true}
              progress={scrollYProgress}
              startIn={0.65} endIn={0.75} startOut={0.85} endOut={0.95}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
interface AnimatedPostProps {
  src: string;
  profileImage: string;
  isVideo?: boolean; // A interrogação significa que é opcional
  progress: MotionValue<number>; // Tipo específico do useScroll do Framer Motion
  startIn: number;
  endIn: number;
  startOut: number;
  endOut: number;
}

function AnimatedPost({
  src,
  profileImage,
  isVideo,
  progress,
  startIn,
  endIn,
  startOut,
  endOut
}: AnimatedPostProps) {
  const opacity = useTransform(
    progress,
    [startIn, endIn, startOut, endOut],
    [0, 1, 1, 0]
  );

  const scale = useTransform(
    progress,
    [startIn, endIn, startOut, endOut],
    [0.8, 1, 1, 1.1]
  );

  const visibleRange = startOut - endIn;
  const likeStart = endIn + visibleRange * 0.15;
  const likePeak = endIn + visibleRange * 0.30;
  const likeFade = endIn + visibleRange * 0.60;

  const bigHeartScale = useTransform(progress, [likeStart, likePeak, likeFade], [0, 1.4, 1]);
  const bigHeartOpacity = useTransform(progress, [likeStart, likePeak, likeFade, startOut], [0, 0.9, 0, 0]);

  const smallHeartScale = useTransform(progress, [likeStart, likePeak, likeFade], [1, 1.3, 1]);
  const smallHeartColor = useTransform(progress, [likeStart, likePeak], ["#ffffff", "#ef4444"]);
  const smallHeartFill = useTransform(progress, [likeStart, likePeak], ["transparent", "#ef4444"]);

  return (
    <motion.div
      style={{ opacity, scale }}
      className="absolute inset-0 z-30 w-full h-full bg-black flex flex-col pt-8 md:pt-12"
    >
      {/* Header Falso no Dark Mode - Proporção Consertada */}
      <div className="flex items-center gap-3 md:gap-3 px-4 md:px-4 py-3 md:py-3 bg-black">
        <div className="w-8 h-8 md:w-8 md:h-8 rounded-full overflow-hidden bg-zinc-800 flex-shrink-0">
          <img src={profileImage} alt="Profile" className="w-full h-full object-cover" />
        </div>
        <span className="font-bold text-xs md:text-sm text-white">nanathsday</span>
        <MoreHorizontal className="w-5 h-5 md:w-5 md:h-5 text-white ml-auto" />
      </div>

      {/* Conteúdo Central */}
      <div className="relative w-full aspect-square flex-shrink-0 bg-zinc-900 overflow-hidden">
        {isVideo ? (
          <video
            src={src}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        ) : (
          <img
            src={src}
            alt="Post expandido"
            className="w-full h-full object-cover"
          />
        )}

        {/* Coração Gigante Overlay */}
        <motion.div
          style={{ scale: bigHeartScale, opacity: bigHeartOpacity }}
          className="absolute inset-0 z-40 flex items-center justify-center pointer-events-none drop-shadow-2xl"
        >
          <svg viewBox="0 0 24 24" fill="white" stroke="white" strokeWidth="0" className="w-24 h-24 md:w-32 md:h-32">
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
          </svg>
        </motion.div>
      </div>

      {/* Rodapé Falso */}
      <div className="flex flex-col px-4 md:px-4 py-3 md:py-3 gap-2 md:gap-2">
        {/* Ícones de Ação */}
        <div className="flex justify-between items-center mb-1">
          <div className="flex gap-4 md:gap-4">
            <motion.svg
              viewBox="0 0 24 24"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6 md:w-6 md:h-6 cursor-pointer"
              style={{
                scale: smallHeartScale,
                color: smallHeartColor,
                fill: smallHeartFill,
                stroke: smallHeartColor
              }}
            >
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
            </motion.svg>

            <MessageCircle className="w-6 h-6 md:w-6 md:h-6 text-white cursor-pointer hover:text-zinc-300" />
            <Send className="w-6 h-6 md:w-6 md:h-6 text-white cursor-pointer hover:text-zinc-300" />
          </div>
          <Bookmark className="w-6 h-6 md:w-6 md:h-6 text-white cursor-pointer hover:text-zinc-300" />
        </div>

        {/* Curtidas */}
        <div className="text-xs md:text-sm font-bold text-white">
          7.452 curtidas
        </div>

        {/* Legenda Fake */}
        <div className="text-xs md:text-sm text-white line-clamp-2 leading-tight">
          <span className="font-bold mr-1.5">nanathsday</span>
          Detalhes do processo criativo para essa campanha incrível ✨
        </div>
      </div>
    </motion.div>
  );
}