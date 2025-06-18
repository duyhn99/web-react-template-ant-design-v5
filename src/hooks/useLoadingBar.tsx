import { useEffect, useRef, useState } from 'react';

export function useLoadingBar() {
  const barRef = useRef<HTMLDivElement | null>(null);
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const bar = document.createElement('div');
    bar.style.position = 'fixed';
    bar.style.top = '0';
    bar.style.left = '0';
    bar.style.height = '3px';
    bar.style.backgroundColor = '#29d';
    bar.style.zIndex = '9999';
    bar.style.transition = 'width 0.2s ease-out, opacity 0.3s ease-in';
    bar.style.width = '0%';
    document.body.appendChild(bar);
    barRef.current = bar;

    return () => {
      document.body.removeChild(bar);
    };
  }, []);

  useEffect(() => {
    if (barRef.current) {
      barRef.current.style.width = `${progress}%`;
      barRef.current.style.opacity = visible ? '1' : '0';
    }
  }, [progress, visible]);

  const start = () => {
    setVisible(true);
    setProgress(30);
    clearInterval(timerRef.current as NodeJS.Timeout);
    timerRef.current = setInterval(() => {
      setProgress((prev) => (prev < 90 ? prev + 5 : prev));
    }, 300);
  };

  const complete = () => {
    setProgress(100);
    clearInterval(timerRef.current as NodeJS.Timeout);
    setTimeout(() => {
      setVisible(false);
      setProgress(0);
    }, 500);
  };

  const set = (value: number) => {
    setVisible(true);
    setProgress(value);
  };

  return { start, complete, set };
}
