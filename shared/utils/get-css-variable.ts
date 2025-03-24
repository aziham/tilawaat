export function getCssVariable(variable: string): string | undefined {
  if (typeof window === 'undefined') return;

  return getComputedStyle(document.documentElement)
    .getPropertyValue(variable)
    .trim();
}
