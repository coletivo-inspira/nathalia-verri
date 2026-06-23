import { useState, useEffect } from 'react';

export interface ViewportState {
  isMobile: boolean;
  scale: number;
  width: number;
}

export function useViewport(): ViewportState {
  const [viewport, setViewport] = useState<ViewportState>({
    isMobile: window.innerWidth <= 768,
    scale: Math.min(1, window.innerWidth / 1700),
    width: window.innerWidth,
  });

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setViewport({ isMobile: width <= 768, scale: Math.min(1, width / 1700), width });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return viewport;
}