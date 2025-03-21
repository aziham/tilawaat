import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const range = (start: number, end: number, step = 1) => {
  const output: number[] = [];

  if (typeof end === 'undefined') {
    end = start;
    start = 0;
  }
  for (let i = start; i < end; i += step) {
    output.push(i);
  }
  return output;
};

export function getCssVariable(variable: string): string | undefined {
  if (typeof window === 'undefined') return;

  return getComputedStyle(document.documentElement)
    .getPropertyValue(variable)
    .trim();
}
