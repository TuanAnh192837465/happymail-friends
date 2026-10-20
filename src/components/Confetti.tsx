import { useMemo, type CSSProperties } from 'react';

const colors = ['#f77b98', '#f8c45a', '#ae98ed', '#8ac9ae', '#ffffff'];
/** CSS confetti: zero runtime dependencies, one animation burst when mounted. */
export function Confetti() {
  const pieces = useMemo(() => Array.from({ length: 70 }, (_, i) => {
    const seed = (n: number) => (Math.sin(i * 69.7 + n * 31.7) * 43758.5453) % 1;
    const normalized = (n: number) => Math.abs(seed(n));
    return {
      left: `${normalized(1) * 100}%`,
      delay: `${normalized(2) * .6}s`,
      duration: `${2.2 + normalized(3) * 1.6}s`,
      shift: `${(normalized(4) * 2 - 1) * 180}px`,
      rotation: `${normalized(5) * 900}deg`,
      bg: colors[i % colors.length],
      width: i % 4 === 0 ? '8px' : '12px',
      radius: i % 3 === 0 ? '50%' : '2px'
    };
  }), []);
  return <div className="confetti-layer" aria-hidden="true">{pieces.map((p, index) => <i key={index} className="confetti-piece" style={{ left: p.left, backgroundColor: p.bg, width: p.width, borderRadius: p.radius, animationDelay: p.delay, animationDuration: p.duration, ['--shift' as string]: p.shift, ['--rotation' as string]: p.rotation } as CSSProperties} />)}</div>;
}
