import { useState, useLayoutEffect, type RefObject } from 'react';

export function useElementSize<T extends HTMLElement>(elementRef: RefObject<T>) {
  const [size, setSize] = useState({ width: 0, height: 0 });

  useLayoutEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const resizeObserver = new ResizeObserver(() => {
      setSize({
        width: element.offsetWidth,
        height: element.offsetHeight,
      });
    });

    resizeObserver.observe(element);
    return () => resizeObserver.disconnect();
  }, [elementRef]);

  return size;
}