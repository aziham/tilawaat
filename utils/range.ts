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
