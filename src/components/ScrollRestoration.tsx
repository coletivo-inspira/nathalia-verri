import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactGA from 'react-ga4';

const ScrollRestoration = () => {
  const { pathname, search } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    // Envia o evento de pageview para o Google Analytics a cada mudança de rota
    ReactGA.send({ hitType: "pageview", page: pathname + search });
  }, [pathname, search]);

  return null;
};

export default ScrollRestoration;