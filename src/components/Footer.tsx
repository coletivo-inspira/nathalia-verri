import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="py-8 px-6 bg-black border-t border-white/10 flex flex-col items-center justify-center gap-5 text-center">
      
      {/* Botão Compacto */}
      <Link
        to="/identidade-visual"
        className="
          px-6 py-2 
          rounded-full 
          bg-zinc-900 border border-zinc-800 
          text-zinc-300 text-sm font-medium
          hover:bg-zinc-800 hover:border-zinc-600 hover:text-white 
          transition-all duration-300
        "
      >
        Identidade Visual
      </Link>

      {/* Copyright Simples */}
      <p className="text-zinc-500 text-xs">
        © {new Date().getFullYear()} Nathália Verri — Todos os direitos reservados.
      </p>
      
    </footer>
  );
};

export default Footer;