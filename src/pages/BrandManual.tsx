import {
  ArrowDown,
  Feather,
  Heart,
  TrendingUp,
  Sparkles,
} from 'lucide-react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import profileImage from '../assets/1.jpeg';
import manual1 from '../assets/manual_1.png';
import manual2 from '../assets/manual_2.png';
import manual3 from '../assets/manual_3.png';
import image2 from '../assets/3.jpeg';
import partnershipImage from '../assets/partnership_image.jpg';
import ScrollToTopButton from '../components/ScrollToTopButton';
import {
  Section,
  SectionHeader,
  ColorCard,
  TypographySpecimen,
} from './BrandManual.components';

const BrandManual = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleNavigateToContact = () => {
    navigate('/#contact');
  };

  const pillarIconProps = {
    size: 24,
    className: 'text-zinc-500',
    strokeWidth: 1.5,
  };

  const pillars = [
    { icon: Sparkles, key: 'strategy' },
    { icon: Feather, key: 'creativity' },
    { icon: Heart, key: 'connection' },
    { icon: TrendingUp, key: 'results' },
  ];

  useEffect(() => {
    document.title = t('brandManual.pageTitle');
  }, [t]);

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
              {t('brandManual.heroTitle')}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
              className="mt-4 text-lg md:text-xl text-zinc-600"
            >
              {t('brandManual.heroSubtitle')}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
              className="mt-8 max-w-lg mx-auto lg:mx-0 text-zinc-700 leading-relaxed"
            >
              {t('brandManual.heroDescription')}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
              className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-lg mx-auto lg:mx-0"
            >
              {pillars.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <div key={pillar.key} className="text-center flex flex-col items-center">
                    <Icon {...pillarIconProps} />
                    <span className="mt-2 text-sm font-medium">{t(`brandManual.pillars.${pillar.key}`)}</span>
                  </div>
                );
              })}
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
              <span className="font-playfair text-8xl text-zinc-800">NV</span>
            </div>
          </div>
          <div className="md:col-span-2">
            <SectionHeader
              title={t('brandManual.logoTitle')}
              subtitle={t('brandManual.logoSubtitle')}
            />
            <p className="text-zinc-700 leading-relaxed max-w-xl">{t('brandManual.logoDescription')}</p>
          </div>
        </Section>

        {/* 3. Paleta de Cores */}
        <Section>
          <SectionHeader
            title={t('brandManual.paletteTitle')}
            subtitle={t('brandManual.paletteSubtitle')}
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            <ColorCard
              hex="#F7F5F2"
              name={t('brandManual.colors.offWhite.name')}
              application={t('brandManual.colors.offWhite.application')}
            />
            <ColorCard
              hex="#EAEAEA"
              name={t('brandManual.colors.pearlGray.name')}
              application={t('brandManual.colors.pearlGray.application')}
            />
            <ColorCard
              hex="#1C1C1C"
              name={t('brandManual.colors.deepGraphite.name')}
              application={t('brandManual.colors.deepGraphite.application')}
            />
            <ColorCard
              hex="#555555"
              name={t('brandManual.colors.typeGray.name')}
              application={t('brandManual.colors.typeGray.application')}
            />
            <ColorCard
              hex="#6D8C9C"
              name={t('brandManual.colors.ashBlue.name')}
              application={t('brandManual.colors.ashBlue.application')}
            />
          </div>
        </Section>

        {/* 4. Tipografia */}
        <Section>
          <SectionHeader
            title={t('brandManual.typographyTitle')}
            subtitle={t('brandManual.typographySubtitle')}
          />
          <div className="space-y-12 bg-white/50 border border-zinc-200/70 rounded-3xl p-8 md:p-12">
            <TypographySpecimen
              category={t('brandManual.typography.titles.category')}
              fontName="Cormorant Garamond"
              fontWeight="Regular"
              exampleText={t('brandManual.typography.titles.example')}
              description={t('brandManual.typography.titles.description')}
              className="font-playfair text-5xl md:text-6xl"
            />
            <TypographySpecimen
              category={t('brandManual.typography.subtitles.category')}
              fontName="Inter"
              fontWeight="Medium"
              exampleText={t('brandManual.typography.subtitles.example')}
              description={t('brandManual.typography.subtitles.description')}
              className="text-2xl md:text-3xl font-medium"
            />
            <TypographySpecimen
              category={t('brandManual.typography.texts.category')}
              fontName="Inter"
              fontWeight="Regular"
              exampleText={t('brandManual.typography.texts.example')}
              description={t('brandManual.typography.texts.description')}
              className="text-base leading-relaxed"
            />
          </div>
        </Section>

        {/* 5. Elementos Visuais */}
        <Section>
          <SectionHeader
            title={t('brandManual.visualsTitle')}
            subtitle={t('brandManual.visualsSubtitle')}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-8 border border-zinc-200/70 rounded-3xl bg-white/50 text-center flex flex-col items-center justify-center aspect-square">
              <div className="w-24 h-24 rounded-full border-2 border-dashed border-zinc-300 mb-4" />
              <h3 className="font-bold text-zinc-900">{t('brandManual.visuals.roundedCorners.title')}</h3>
              <p className="text-sm text-zinc-600 mt-1">{t('brandManual.visuals.roundedCorners.description')}</p>
            </div>
            <div className="p-8 border border-zinc-200/70 rounded-3xl bg-white/50 text-center flex flex-col items-center justify-center aspect-square">
              <div className="w-full h-px bg-zinc-300 mb-4" />
              <h3 className="font-bold text-zinc-900">{t('brandManual.visuals.thinLines.title')}</h3>
              <p className="text-sm text-zinc-600 mt-1">{t('brandManual.visuals.thinLines.description')}</p>
            </div>
            <div className="p-8 border border-zinc-200/70 rounded-3xl bg-white/50 text-center flex flex-col items-center justify-center aspect-square">
              <Feather
                size={32}
                strokeWidth={1.5}
                className="text-zinc-500 mb-4"
              />
              <h3 className="font-bold text-zinc-900">{t('brandManual.visuals.minimalIcons.title')}</h3>
              <p className="text-sm text-zinc-600 mt-1">{t('brandManual.visuals.minimalIcons.description')}</p>
            </div>
            <div className="p-8 border border-zinc-200/70 rounded-3xl bg-white/50 text-center flex flex-col items-center justify-center aspect-square">
              <div className="w-1/2 h-1/2 border-l border-t border-zinc-300" />
              <h3 className="font-bold text-zinc-900 mt-4">{t('brandManual.visuals.editorialLayout.title')}</h3>
              <p className="text-sm text-zinc-600 mt-1">{t('brandManual.visuals.editorialLayout.description')}</p>
            </div>
          </div>
        </Section>

        {/* 6. Direção Fotográfica */}
        <Section>
          <SectionHeader
            title={t('brandManual.photographyTitle')}
            subtitle={t('brandManual.photographySubtitle')}
          />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            <img
              src={profileImage}
              alt={t('brandManual.heroTitle')}
              className="aspect-[3/4] w-full h-full object-cover rounded-2xl"
            />
            <img
              src={image2}
              alt={t('brandManual.heroTitle')}
              className="aspect-[3/4] w-full h-full object-cover rounded-2xl"
            />
            <img
              src={partnershipImage}
              alt={t('brandManual.heroTitle')}
              className="aspect-[3/4] w-full h-full object-cover rounded-2xl"
            />
            <img
              src={manual1}
              alt={t('brandManual.applicationsTitle')}
              className="aspect-[3/4] w-full h-full object-cover rounded-2xl"
            />
          </div>
          <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4 text-zinc-700 list-disc list-inside">
            {t('brandManual.photographyList', { returnObjects: true }).map((item: string, index: number) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </Section>

        {/* 7. Tom de Voz */}
        <Section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeader
              title={t('brandManual.voiceTitle')}
              subtitle={t('brandManual.voiceSubtitle')}
            />
            <p className="text-zinc-700 leading-relaxed max-w-xl">{t('brandManual.voiceDescription')}</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {(t('brandManual.voiceWords', { returnObjects: true }) as string[]).map((word) => (
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
            title={t('brandManual.keywordsTitle')}
            subtitle={t('brandManual.keywordsSubtitle')}
          />
          <div className="flex flex-wrap gap-3 justify-center">
            {(t('brandManual.keywords', { returnObjects: true }) as string[]).map((tag) => (
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
            title={t('brandManual.applicationsTitle')}
            subtitle={t('brandManual.applicationsSubtitle')}
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
            title={t('brandManual.typographyHierarchyTitle')}
            subtitle={t('brandManual.typographyHierarchySubtitle')}
          />
          <div className="bg-white/50 border border-zinc-200/70 rounded-3xl p-8 md:p-12 space-y-10">
            <div>
              <p className="text-sm text-zinc-500 uppercase tracking-widest">H1</p>
              <h1 className="font-playfair text-5xl md:text-6xl text-zinc-900 mt-1">{t('brandManual.hierarchy.h1')}</h1>
            </div>
            <div className="h-px bg-zinc-200/70" />
            <div>
              <p className="text-sm text-zinc-500 uppercase tracking-widest">H2</p>
              <h2 className="font-playfair text-4xl md:text-5xl text-zinc-800 mt-1">{t('brandManual.hierarchy.h2')}</h2>
            </div>
            <div className="h-px bg-zinc-200/70" />
            <div>
              <p className="text-sm text-zinc-500 uppercase tracking-widest">H3</p>
              <h3 className="text-2xl md:text-3xl font-medium text-zinc-800 mt-1">{t('brandManual.hierarchy.h3')}</h3>
            </div>
            <div className="h-px bg-zinc-200/70" />
            <div>
              <p className="text-sm text-zinc-500 uppercase tracking-widest">Parágrafo</p>
              <p className="text-zinc-700 leading-relaxed mt-2 max-w-3xl">{t('brandManual.hierarchy.paragraph')}</p>
            </div>
            <div className="h-px bg-zinc-200/70" />
            <div>
              <p className="text-sm text-zinc-500 uppercase tracking-widest">Botões</p>
              <div className="flex flex-wrap gap-4 mt-4">
                <button className="px-6 py-3 bg-zinc-900 text-white rounded-full text-sm font-medium">
                  {t('brandManual.hierarchy.buttonPrimary')}
                </button>
                <button className="px-6 py-3 bg-transparent text-zinc-800 rounded-full text-sm font-medium border border-zinc-300">
                  {t('brandManual.hierarchy.buttonSecondary')}
                </button>
              </div>
            </div>
          </div>
        </Section>

        {/* 11. Resumo da Marca */}
        <Section>
          <div className="bg-white/50 border border-zinc-200/70 rounded-3xl p-8 md:p-16 text-center">
            <h2 className="font-playfair text-4xl md:text-5xl text-zinc-900">{t('brandManual.summaryTitle')}</h2>
            <p className="text-lg text-zinc-700 mt-6 max-w-4xl mx-auto leading-relaxed">{t('brandManual.summaryDescription')}</p>
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-2xl mx-auto">
              <div className="text-left">
                <h4 className="font-bold text-zinc-900">{t('brandManual.summaryObjectivesTitle')}</h4>
                <p className="text-zinc-600 mt-1">{t('brandManual.summaryObjectives')}</p>
              </div>
              <div className="text-left">
                <h4 className="font-bold text-zinc-900">{t('brandManual.summaryValuesTitle')}</h4>
                <p className="text-zinc-600 mt-1">{t('brandManual.summaryValues')}</p>
              </div>
            </div>
            <button
              onClick={handleNavigateToContact}
              className="mt-12 px-8 py-4 bg-zinc-900 text-white rounded-full flex items-center justify-center gap-2 mx-auto hover:scale-105 transition-transform duration-300 font-medium"
            >
              {t('brandManual.summaryButton')} <ArrowDown size={16} className="hidden" />
            </button>
          </div>
        </Section>
      </main>
      <ScrollToTopButton />
    </div>
  );
};

export default BrandManual;