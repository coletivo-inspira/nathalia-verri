import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { creatorLinks, socialLinks } from '../data/links';
import image from '../assets/partnership_image.jpg';

const profile = {
  name: 'Nathália Verri',
  handle: '@nanathsday',
  role: 'Cupons & Parcerias',
  image,
};

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

          {/* Redes sociais */}
          <div className="flex items-center justify-center gap-3 mt-6">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;

              return (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/60 backdrop-blur-md border border-white/40 flex items-center justify-center text-zinc-600 hover:text-zinc-900 hover:bg-white transition-all duration-300"
                >
                  <Icon size={18} />
                </a>
              );
            })}
          </div>
        </motion.div>

        {/* Links Section */}
        <div className="flex flex-col gap-4">
          {creatorLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.3 + index * 0.1,
                ease,
              }}
              className="
                group relative w-full flex items-center justify-between p-4 rounded-full
                transition-all duration-500 ease-out hover:scale-[1.02]
                bg-white/60 backdrop-blur-md text-zinc-900 shadow-sm
                hover:shadow-md hover:bg-white border border-white/40
              "
            >
              <div className="flex items-center gap-4 pl-2">
                <img
                  src={link.image}
                  alt={link.title}
                  className="w-10 h-10 rounded-full object-cover"
                />

                <div className="flex flex-col items-start">
                  <span className="font-medium text-sm md:text-base tracking-wide">
                    {link.title}
                  </span>

                  <span className="text-xs mt-0.5 font-light text-zinc-500">
                    Cupom: {link.code}
                  </span>
                </div>
              </div>

              <div
                className="
                  w-10 h-10 rounded-full flex items-center justify-center
                  transition-all duration-300 group-hover:rotate-45 mr-1
                  bg-zinc-50 group-hover:bg-zinc-100
                "
              >
                <ArrowUpRight
                  size={18}
                  strokeWidth={1.5}
                  className="text-zinc-400 group-hover:text-zinc-900"
                />
              </div>
            </motion.a>
          ))}
        </div>

        {/* Footer */}
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