﻿import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-black text-center border-t border-white/5">
      <p className="text-zinc-500 text-sm">
        {t('footer.copyright', { year: currentYear })}
      </p>
    </footer>
  );
};

export default Footer;