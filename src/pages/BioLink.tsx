import { motion } from 'framer-motion';
import { ArrowUpRight, Mail, LayoutGrid, Sparkles } from 'lucide-react';
import { FaInstagram } from 'react-icons/fa';

const profile = {
  name: 'Nathália Verri',
  handle: '@nanathsday',
  role: 'Direção de Arte & Estratégia',
  // Coloque aqui uma foto do seu feed que represente bem sua estética (ex: tomando café, trabalhando, ou um retrato clean)
  image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=800&auto=format&fit=crop' 
};

const links = [
  {
    title: 'Portfólio Completo',
    subtitle: 'Veja meus cases e projetos recentes',
    url: '#works',
    icon: <LayoutGrid size={18} strokeWidth={1.5} />,
    primary: true,
  },
  {
    title: 'Acompanhe o Feed',
    subtitle: 'Bastidores, lifestyle e processo criativo',
    url: 'https://instagram.com/nanathsday',
    icon: <FaInstagram size={18} strokeWidth={1.5} />,
    primary: false,
  },
  {
    title: 'Consultoria Criativa',
    subtitle: 'Vamos elevar a sua marca pessoal?',
    url: '#',
    icon: <Sparkles size={18} strokeWidth={1.5} />,
    primary: false,
  },
  {
    title: 'Contato Comercial',
    subtitle: 'Parcerias e novos projetos',
    url: 'mailto:nathverri2016@gmail.com', // Atualizado com seu e-mail
    icon: <Mail size={18} strokeWidth={1.5} />,
    primary: false,
  },
];

const ease = [0.16, 1, 0.3, 1] as const;

const BioLink = () => {
  return (
    <main className="min-h-screen bg-[#faf8f6] selection:bg-zinc-900 selection:text-white flex flex-col items-center py-20 px-6 relative overflow-hidden">
      
      {/* Background blur sutil para dar um tom etéreo e fotográfico */}
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#eaded2] rounded-full blur-3xl opacity-30 pointer-events-none" />

      <div className="w-full max-w-md mx-auto relative z-10">
        
        {/* Profile Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease }}
          className="flex flex-col items-center text-center mb-14"
        >
          <motion.div 
            initial={{ scale: 0.9, opacity: 0, filter: 'blur(10px)' }}
            animate={{ scale: 1, opacity: 1, filter: 'blur(0px)' }}
            transition={{ duration: 1.2, ease, delay: 0.1 }}
            className="w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden mb-6 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.15)]"
          >
            <img 
              src={profile.image} 
              alt={profile.name} 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </motion.div>

          {/* Tipografia Editorial */}
          <h1 className="text-3xl md:text-4xl font-playfair text-zinc-900 tracking-tight">
            {profile.name}
          </h1>
          <a 
            href="https://instagram.com/nanathsday" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sm font-medium text-zinc-500 mt-2 mb-4 hover:text-zinc-900 transition-colors tracking-wide"
          >
            {profile.handle}
          </a>
          <p className="text-xs text-zinc-400 uppercase tracking-[0.3em] font-medium">
            {profile.role}
          </p>
        </motion.div>

        {/* Links Section */}
        <div className="flex flex-col gap-4">
          {links.map((link, index) => (
            <motion.a
              key={index}
              href={link.url}
              target={link.url.startsWith('http') ? "_blank" : "_self"}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 + index * 0.1, ease }}
              className={`
                group relative w-full flex items-center justify-between p-4 rounded-full
                transition-all duration-500 ease-out hover:scale-[1.02]
                ${link.primary 
                  ? 'bg-zinc-900 text-white shadow-xl hover:shadow-2xl hover:bg-zinc-800' 
                  : 'bg-white/60 backdrop-blur-md text-zinc-900 shadow-sm hover:shadow-md hover:bg-white border border-white/40'
                }
              `}
            >
              <div className="flex items-center gap-4 pl-2">
                <div className={`
                  w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300
                  ${link.primary ? 'bg-white/10 text-white' : 'bg-zinc-100 text-zinc-500 group-hover:bg-zinc-200 group-hover:text-zinc-900'}
                `}>
                  {link.icon}
                </div>
                <div className="flex flex-col items-start">
                  <span className="font-medium text-sm md:text-base tracking-wide">
                    {link.title}
                  </span>
                  <span className={`text-xs mt-0.5 font-light ${link.primary ? 'text-zinc-400' : 'text-zinc-500'}`}>
                    {link.subtitle}
                  </span>
                </div>
              </div>

              <div className={`
                w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300
                group-hover:rotate-45 mr-1
                ${link.primary ? 'bg-white/10 group-hover:bg-white/20' : 'bg-zinc-50 group-hover:bg-zinc-100'}
              `}>
                <ArrowUpRight size={18} strokeWidth={1.5} className={link.primary ? 'text-white' : 'text-zinc-400 group-hover:text-zinc-900'} />
              </div>
            </motion.a>
          ))}
        </div>

        {/* Footer Minimalista */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-20 text-center"
        >
          <div className="w-px h-12 bg-gradient-to-b from-zinc-300 to-transparent mx-auto mb-6" />
          <p className="text-[10px] text-zinc-400 uppercase tracking-[0.3em]">
            © {new Date().getFullYear()} • Nathália Verri
          </p>
        </motion.div>

      </div>
    </main>
  );
};

export default BioLink;