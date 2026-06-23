import { motion, type Variants } from 'framer-motion';

export const Section = ({
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

export const SectionHeader = ({
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

export const ColorCard = ({
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

export const TypographySpecimen = ({
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