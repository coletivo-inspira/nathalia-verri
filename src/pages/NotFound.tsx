import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="bg-[#F7F5F2] font-inter text-zinc-800 antialiased min-h-screen flex items-center justify-center text-center px-6">
      <main>
        <h1 className="font-playfair text-8xl md:text-9xl text-zinc-900 tracking-tighter">
          404
        </h1>
        <p className="mt-4 text-lg md:text-xl text-zinc-600">
          Página não encontrada
        </p>
        <p className="mt-2 max-w-md mx-auto text-zinc-700 leading-relaxed">
          A página que você está procurando pode ter sido removida ou o link está quebrado.
        </p>
        <Link
          to="/"
          className="mt-10 inline-flex items-center justify-center gap-2 px-8 py-4 bg-zinc-900 text-white rounded-full hover:scale-105 transition-transform duration-300 font-medium"
        >
          <ArrowLeft size={18} />
          Voltar para a página inicial
        </Link>
      </main>
    </div>
  );
};

export default NotFound;