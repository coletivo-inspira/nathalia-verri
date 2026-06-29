import React from "react";
import { motion, type Variants } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Music2,
  Mail,
  Phone,
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
  Quote
} from "lucide-react";
import { FaInstagram } from "react-icons/fa";

// Importações (Ajuste os caminhos conforme a estrutura do seu projeto)
import profileImage from "../assets/1.jpeg";
import { projects } from "../data/projects";
import moodboardImg2 from "../assets/3.jpeg";
import moodboardImg3 from "../assets/partnership_image.jpg";
import moodboardImg4 from "../assets/manual_2.png";
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
            <span className="inline-flex px-4 py-2 rounded-full bg-[#6D8C9C]/10 text-[#6D8C9C] font-semibold text-sm">
              Mídia Kit 2026
            </span>
            
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
              src={profileImage}
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
              <br/><br/>
              Do roteiro dos Reels à curadoria estética do feed, o foco é construir um lifestyle magnético que inspire e gere identificação genuína, mostrando que os bastidores também são conteúdo de alto valor.
            </p>
          </Card>
          
          <Card className="bg-zinc-900 text-white border-none flex flex-col justify-center">
            <h3 className="font-bold text-2xl mb-6">Meus Pilares</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3"><Sparkles size={20} className="text-[#6D8C9C]"/> Beleza & Autocuidado</li>
              <li className="flex items-center gap-3"><Coffee size={20} className="text-[#6D8C9C]"/> Lifestyle & Rotina</li>
              <li className="flex items-center gap-3"><Plane size={20} className="text-[#6D8C9C]"/> Viagens & Experiências</li>
              <li className="flex items-center gap-3"><Shirt size={20} className="text-[#6D8C9C]"/> Moda & Estilo</li>
            </ul>
          </Card>
        </div>
      </section>

      {/* 3. PÚBLICO */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <SectionTitle>Meu Público</SectionTitle>
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <Users className="mb-5 text-zinc-400" size={32}/>
            <h3 className="text-3xl sm:text-4xl font-black">Feminino</h3>
            <p className="text-zinc-500 mt-2">Maior Público (85%)</p>
          </Card>
          <Card>
            <Heart className="mb-5 text-zinc-400" size={32}/>
            <h3 className="text-3xl sm:text-4xl font-black">24-35</h3>
            <p className="text-zinc-500 mt-2">Faixa Etária Principal</p>
          </Card>
          <Card>
            <Briefcase className="mb-5 text-zinc-400" size={32}/>
            <h3 className="text-3xl sm:text-4xl font-black">Sudeste</h3>
            <p className="text-zinc-500 mt-2">SP, RJ e BH (MG)</p>
          </Card>
          <Card>
            <Sparkles className="mb-5 text-zinc-400" size={32}/>
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
                      <p className="text-3xl md:text-4xl font-black text-zinc-900">15.7K</p>
                      <span className="text-zinc-500">Seguidores</span>
                    </div>
                    <div>
                      <p className="text-3xl md:text-4xl font-black text-zinc-900">5.8%</p>
                      <span className="text-zinc-500">Engajamento</span>
                    </div>
                    <div>
                      <p className="text-3xl md:text-4xl font-black text-zinc-900">+50K</p>
                      <span className="text-zinc-500">Alcance (Reels)</span>
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
                    <Music2 size={32} />
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
      {projects && projects.length > 0 && (
        <section className="max-w-7xl mx-auto px-6 pb-24">
          <SectionTitle>Parcerias Recentes</SectionTitle>
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <Link to={`/projeto/${project.id}`} key={project.id} className="group block" >
                <Card className="!p-4 hover:border-zinc-300 transition-colors">
                  <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden mb-4">
                    <img src={project.cover} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="px-2 pb-2">
                    <p className="text-sm font-bold text-zinc-500 uppercase tracking-wider mb-1">{project.category}</p>
                    <h3 className="font-black text-xl text-zinc-900">{project.title}</h3>
                  </div>
                </Card>
              </Link>
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
            <MessageSquare className="mb-6 text-[#6D8C9C]" size={32}/>
            <h3 className="font-bold text-xl mb-3">Briefing</h3>
            <p className="text-zinc-500 text-sm leading-relaxed">Alinhamento de expectativas, estudo do produto e definição dos KPIs da campanha.</p>
          </Card>
          
          <Card className="relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-6 text-zinc-100 font-black text-8xl -z-10 group-hover:scale-110 transition-transform">2</div>
            <PencilRuler className="mb-6 text-[#6D8C9C]" size={32}/>
            <h3 className="font-bold text-xl mb-3">Criação</h3>
            <p className="text-zinc-500 text-sm leading-relaxed">Desenvolvimento de roteiro, moodboard e planejamento estético do conteúdo.</p>
          </Card>

          <Card className="relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-6 text-zinc-100 font-black text-8xl -z-10 group-hover:scale-110 transition-transform">3</div>
            <ThumbsUp className="mb-6 text-[#6D8C9C]" size={32}/>
            <h3 className="font-bold text-xl mb-3">Aprovação</h3>
            <p className="text-zinc-500 text-sm leading-relaxed">Envio do material para validação da marca antes de qualquer publicação.</p>
          </Card>

          <Card className="relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-6 text-zinc-100 font-black text-8xl -z-10 group-hover:scale-110 transition-transform">4</div>
            <Rocket className="mb-6 text-[#6D8C9C]" size={32}/>
            <h3 className="font-bold text-xl mb-3">Publicação</h3>
            <p className="text-zinc-500 text-sm leading-relaxed">Postagem nos horários de pico da comunidade e envio de relatório de métricas.</p>
          </Card>
        </motion.div>
      </section>

      {/* 7. PROVA SOCIAL / DEPOIMENTO */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
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
      </section>

      {/* 8. MOODBOARD VISUAL */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
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
      </section>

      {/* 9. CONTATO */}
      <section id="contato" className="max-w-7xl mx-auto px-6 pb-24">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <div className="rounded-3xl bg-zinc-900 text-white p-12 lg:p-20 text-center">
            <h2 className="text-4xl md:text-5xl font-black">Vamos criar algo incrível juntos?</h2>
            
            <p className="mt-6 text-lg md:text-xl text-zinc-300 max-w-3xl mx-auto leading-relaxed md:leading-9">
              Estou disponível para campanhas, criação de conteúdo, UGC, eventos, lançamentos, restaurantes, hotéis e projetos especiais.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
              <a href="https://instagram.com/nanathsday" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-white/20 transition-colors rounded-3xl p-8 border border-white/5">
                <FaInstagram size={36} className="mx-auto mb-5 text-zinc-400" />
                <h3 className="font-bold text-xl">Instagram</h3>
                <p className="text-zinc-300 mt-2">@nanathsday</p>
              </a>

              <a href="https://tiktok.com/@nanathsday" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-white/20 transition-colors rounded-3xl p-8 border border-white/5">
                <Music2 size={36} className="mx-auto mb-5 text-zinc-400" />
                <h3 className="font-bold text-xl">TikTok</h3>
                <p className="text-zinc-300 mt-2">@nanathsday</p>
              </a>

              <a href="mailto:contato@nanathsday.com" className="bg-white/10 hover:bg-white/20 transition-colors rounded-3xl p-8 border border-white/5">
                <Mail size={36} className="mx-auto mb-5 text-zinc-400" />
                <h3 className="font-bold text-xl">E-mail</h3>
                <p className="text-zinc-300 mt-2 break-all">contato@nanathsday.com</p>
              </a>

              <a href="https://wa.me/5500000000000" target="_blank" rel="noopener noreferrer" className="bg-white text-zinc-900 hover:bg-zinc-200 transition-colors rounded-3xl p-8">
                <Phone size={36} className="mx-auto mb-5 text-[#6D8C9C]" />
                <h3 className="font-bold text-xl">WhatsApp</h3>
                <p className="text-zinc-600 mt-2">Solicitar orçamento</p>
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 10. RODAPÉ */}
      <footer className="border-t border-zinc-200 py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-black">nanathsday</h2>
            <p className="text-zinc-500 mt-2">Marca Pessoal • UGC • Publicidade</p>
          </div>
          <div className="flex gap-8 font-semibold text-zinc-600">
            <a href="https://instagram.com/nanathsday" className="hover:text-zinc-900 transition">Instagram</a>
            <a href="https://tiktok.com/@nanathsday" className="hover:text-zinc-900 transition">TikTok</a>
            <a href="mailto:contato@nanathsday.com" className="hover:text-zinc-900 transition">E-mail</a>
          </div>
        </div>
      </footer>

      <ScrollToTopButton />
    </div>
  );
}