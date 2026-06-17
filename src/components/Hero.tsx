import { motion } from 'framer-motion';

import { ArrowRight } from 'lucide-react';



import image2 from '../assets/1.jpeg';



const Hero = () => {

  return (

<section

  id="home"

  className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#f8f5f2] via-white via-10% to-[#f1ece7]"

>

      {/* Background blur */}

      <div className="absolute top-[-120px] left-[-120px] w-[400px] h-[400px] bg-[#eaded2] rounded-full blur-3xl opacity-40" />



      {/* Right Background Image */}

      <motion.div

        initial={{ opacity: 0, x: 80 }}

        animate={{ opacity: 0.8, x: 0 }}

        transition={{ duration: 1 }}

        className="

          absolute

          right-[-120px]

          top-1/2

          -translate-y-1/2

          w-[730px]

          h-[950px]

          hidden lg:block

        "

      >

        {/* Glow */}

        <div className="absolute inset-0 bg-[#d8c7b8] blur-3xl opacity-30 rounded-full scale-90" />



        {/* Image */}

        <img

          src={image2}

          alt="Nathália Verri"

          className="

            relative

            w-full

            h-full

            object-cover

            rounded-[3rem]

            opacity-90

          "

        />



        {/* Overlay */}

        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#f8f5f2]/20 to-[#f8f5f2]" />

      </motion.div>



      {/* Content */}

      <div className="relative z-20 max-w-6xl mx-auto px-6 md:px-12 w-full">

        <motion.div

          initial={{ opacity: 0, y: 35 }}

          animate={{ opacity: 1, y: 0 }}

          transition={{ duration: 0.8 }}

          className="max-w-3xl"

        >

          <span className="uppercase tracking-[0.4em] text-sm text-zinc-500">

            Marketing & Comunicação • Social Media • Estratégia de Conteúdo

          </span>



          <h1 className="text-6xl md:text-8xl font-playfair text-zinc-900 mt-6 leading-[0.95]">

            Nathália

            <br />

            Verri

          </h1>



          <p className="max-w-2xl text-lg md:text-xl text-zinc-600 mt-8 leading-relaxed font-light">

            Transformando comunicação, estratégia e presença digital

            em experiências que geram conexão e resultados.

          </p>



          <div className="flex flex-col sm:flex-row gap-4 mt-12">

            <a

              href="#about"

              className="

                px-8 py-4 bg-zinc-900 text-white rounded-full

                flex items-center justify-center gap-2

                hover:scale-105 transition-all duration-300

                w-fit

              "

            >

              Conheça minha trajetória

              <ArrowRight size={18} />

            </a>

          </div>

        </motion.div>

      </div>

    </section>

  );

};



export default Hero;



// import { motion } from 'framer-motion';
// import { ArrowRight } from 'lucide-react';
// import { FaInstagram, FaLinkedin } from 'react-icons/fa';
// import image2 from '../assets/1.jpeg';

// const Hero = () => {
//   return (
//     <section
//       id="home"
//       className="relative min-h-screen bg-[#faf8f6] overflow-hidden"
//     >
//       <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 min-h-screen">
//         <div className="grid lg:grid-cols-[1.1fr_0.9fr] items-center min-h-screen gap-16">
          
//           {/* TEXTO */}
//           <motion.div
//             initial={{ opacity: 0, y: 40 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1 }}
//           >
//             <span className="uppercase tracking-[0.35em] text-xs text-zinc-400">
//               Publicidade & Propaganda
//             </span>

//             <h1 className="font-playfair text-zinc-900 leading-[0.88] mt-8">
//               <span className="block text-6xl md:text-8xl lg:text-[7rem]">
//                 Nathália
//               </span>

//               <span className="block text-6xl md:text-8xl lg:text-[7rem] text-zinc-400 italic">
//                 Verri
//               </span>
//             </h1>

//             <p className="mt-10 max-w-xl text-lg md:text-xl text-zinc-600 leading-relaxed">
//               Estratégia, marketing e comunicação para construir
//               conexões autênticas e transformar ideias em resultados.
//             </p>

//             <div className="flex flex-wrap gap-6 mt-12">
//               <a
//                 href="#about"
//                 className="
//                   group inline-flex items-center gap-3
//                   text-zinc-900 font-medium
//                 "
//               >
//                 Conheça minha trajetória

//                 <ArrowRight
//                   size={18}
//                   className="group-hover:translate-x-1 transition-transform"
//                 />
//               </a>
//             </div>

//             <div className="flex items-center gap-5 mt-16">
//               <a
//                 href="https://www.linkedin.com/in/nathaliaverri/"
//                 target="_blank"
//                 rel="noreferrer"
//                 className="text-zinc-500 hover:text-zinc-900 transition-colors"
//               >
//                 <FaLinkedin size={22} />
//               </a>

//               <a
//                 href="https://www.instagram.com/nanathsday/"
//                 target="_blank"
//                 rel="noreferrer"
//                 className="text-zinc-500 hover:text-zinc-900 transition-colors"
//               >
//                 <FaInstagram size={22} />
//               </a>
//             </div>
//           </motion.div>

//           {/* FOTO */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.96 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 1.2 }}
//             className="relative"
//           >
//             <div className="relative">
//               {/* Moldura */}
//               <div className="absolute -inset-4 border border-zinc-200 rounded-[40px]" />

//               {/* Imagem */}
//               <img
//                 src={image2}
//                 alt="Nathália Verri"
//                 className="
//                   relative
//                   w-full
//                   max-w-[520px]
//                   mx-auto
//                   rounded-[32px]
//                   object-cover
//                   shadow-[0_30px_80px_rgba(0,0,0,0.08)]
//                 "
//               />

//               {/* Card flutuante */}
//               <div
//                 className="
//                   hidden lg:block
//                   absolute
//                   -bottom-8
//                   -left-8
//                   bg-white
//                   border border-zinc-200
//                   rounded-2xl
//                   p-5
//                   shadow-lg
//                 "
//               >
//                 <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">
//                   Atualmente
//                 </p>

//                 <p className="mt-2 text-zinc-900">
//                   Publicidade & Propaganda
//                 </p>

//                 <p className="text-zinc-500 text-sm">
//                   UNA • 2025 — 2028
//                 </p>
//               </div>
//             </div>
//           </motion.div>

//         </div>
//       </div>

//       {/* SCROLL INDICATOR */}
//       <div className="hidden md:flex absolute bottom-10 left-1/2 -translate-x-1/2 flex-col items-center">
//         <span className="text-[10px] uppercase tracking-[0.3em] text-zinc-400 mb-3">
//           Scroll
//         </span>

//         <div className="w-px h-12 bg-zinc-300" />
//       </div>
//     </section>
//   );
// };

// export default Hero;
//