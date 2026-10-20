import type { SVGProps } from 'react';

type IconProps = SVGProps<SVGSVGElement>;
export function IconSparkle(props: IconProps) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m12 2 1.9 6.1L20 10l-6.1 1.9L12 18l-1.9-6.1L4 10l6.1-1.9L12 2Z"/><path d="m19.5 15 .9 2.6L23 18.5l-2.6.9-.9 2.6-.9-2.6-2.6-.9 2.6-.9.9-2.6ZM4 15l.7 2.3L7 18l-2.3.7L4 21l-.7-2.3L1 18l2.3-.7L4 15Z"/></svg>;
}
export function IconArrow(props: IconProps) { return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M5 12h14m-6-6 6 6-6 6"/></svg>; }
export function IconHeart(props: IconProps) { return <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}><path d="M20.7 4.6a5.5 5.5 0 0 0-7.8 0L12 5.5l-.9-.9a5.5 5.5 0 1 0-7.8 7.8L12 21l8.7-8.6a5.5 5.5 0 0 0 0-7.8Z"/></svg>; }
export function IconCheck(props: IconProps) { return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m5 12 4 4L19 6"/></svg>; }
