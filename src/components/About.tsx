import { motion } from 'framer-motion';
import image2 from '../assets/3.jpeg';

const About = () => {
  return (
    <section
      id="about"
      className="bg-[#faf8f6] py-20 md:py-32 px-6 md:px-12 lg:px-20"
    >
      <div className="max-w-7xl mx-auto">
        {/* Título */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-playfair text-5xl md:text-7xl lg:text-8xl text-zinc-900 mb-16 lg:mb-24"
        >
          SOBRE
        </motion.h2>

        <div className="grid lg:grid-cols-[1fr_1.2fr_1fr] gap-12 lg:gap-20 items-start">
          {/* ESQUERDA */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1 space-y-16"
          >
            {/* SOBRE */}
            <div className="space-y-8">
              <p className="text-xl lg:text-2xl leading-relaxed text-zinc-700">
                Estudante de Publicidade e Propaganda com formação técnica em
                Administração, atuando na interseção entre marketing, comercial e
                comunicação estratégica.
              </p>

              <p className="text-lg leading-relaxed text-zinc-600">
                Minha experiência reúne prospecção comercial, SDR, relacionamento
                com clientes, branding, redes sociais e produção de conteúdo,
                sempre com foco em crescimento de marcas e geração de
                oportunidades.
              </p>

              <p className="text-lg leading-relaxed text-zinc-600">
                Busco transformar estratégia em resultado através da comunicação,
                combinando criatividade, análise e visão de negócios.
              </p>
            </div>

            {/* FORMAÇÃO */}
            <div>
              <h3 className="font-playfair text-3xl md:text-4xl text-zinc-900 border-b border-zinc-300 pb-4 mb-8">
                Formação
              </h3>

              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-zinc-900">
                    Publicidade e Propaganda
                  </h4>

                  <p className="text-zinc-500">
                    UNA • 2025 — 2028
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-zinc-900">
                    Embaixadora do Creators Club | Synergy.co
                  </h4>

                  <p className="text-zinc-500">
                    Representação e engajamento da comunidade criativa.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-zinc-900">
                    Técnico em Administração
                  </h4>

                  <p className="text-zinc-500">
                    Formação técnica em gestão e processos administrativos.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-zinc-900">
                    Inglês Intermediário
                  </h4>

                  <p className="text-zinc-500">
                    Leitura, escrita e comunicação
                  </p>
                </div>
              </div>
            </div>

            {/* HABILIDADES */}
            <div>
              <h3 className="font-playfair text-3xl md:text-4xl text-zinc-900 border-b border-zinc-300 pb-4 mb-8">
                Habilidades
              </h3>

              <div className="flex flex-wrap gap-3">
                {[
                  'Marketing Digital',
                  'Branding',
                  'Social Media',
                  'CRM',
                  'SDR',
                  'Canva',
                  'CapCut',
                  'Meta Ads',
                  'Google Ads',
                  'Pacote Office',
                  'Criação de Conteúdo',
                  'Copywriting',
                  'Storytelling',
                  'Planejamento de Conteúdo',
                  'Estratégia Digital',
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 border border-zinc-300 rounded-full text-sm text-zinc-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* FOTO */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="order-1 lg:order-2"
          >
            <div className="relative">
              <div className="absolute -inset-4 rounded-[32px] border border-zinc-200" />

              <div className="absolute -inset-2 rounded-[28px] bg-gradient-to-br from-zinc-100 to-zinc-50" />

              <img
                src={image2}
                alt="Nathália Verri"
                className="relative w-full rounded-[24px] object-cover shadow-xl"
              />
            </div>
          </motion.div>

          {/* DIREITA */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-3"
          >
            <div className="lg:sticky lg:top-24">
              <h3 className="font-playfair text-3xl md:text-4xl text-zinc-900 border-b border-zinc-300 pb-4 mb-8">
                Experiência
              </h3>

              <div className="space-y-10">
                <div>
                  <h4 className="font-semibold text-zinc-900">
                    Social Media • Transfacil
                  </h4>

                  <p className="text-zinc-500 text-sm">
                    Jul 2025 — o momento
                  </p>

                  <p className="mt-2 text-zinc-600 leading-relaxed">
                    Atuo como Social Media, sendo responsável pela gestão de todas as redes sociais da empresa, incluindo o planejamento estratégico, a criação e execução do calendário editorial, além do acompanhamento e otimização dos conteúdos publicados.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-zinc-900">
                    Marketing • Emive
                  </h4>

                  <p className="text-zinc-500 text-sm">
                    Jun 2023 — Ago 2024
                  </p>

                  <p className="mt-2 text-zinc-600 leading-relaxed">
                    Responsável pela prospecção de leads (SDR), contato inicial com
                    clientes, CRM, comunicação estratégica e nutrição de oportunidades
                    comerciais.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-zinc-900">
                    Assistente de vendas • Hidrau Máquinas
                  </h4>

                  <p className="text-zinc-500 text-sm">
                    Mar 2022 — Nov 2022
                  </p>

                  <p className="mt-2 text-zinc-600 leading-relaxed">
                    Atuação no setor comercial, entrada de pedidos, transferências de
                    compradores, atendimento e suporte ao cliente.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-zinc-900">
                    Assistente Legislativa • Câmara Municipal de Belo Horizonte
                  </h4>

                  <p className="text-zinc-500 text-sm">
                    Jan 2019 — Jun 2019
                  </p>

                  <p className="mt-2 text-zinc-600 leading-relaxed">
                    Atividades administrativas, secretariado, organização de eventos,
                    contato com afiliados e registros internos.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;