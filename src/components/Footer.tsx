const Footer = () => {
  return (
    <footer className="py-8 bg-black text-center border-t border-white/5">
      <p className="text-zinc-500 text-sm">
        © {new Date().getFullYear()} Nathália Verri — Todos os direitos reservados.
      </p>
    </footer>
  );
};

export default Footer;