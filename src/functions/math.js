export const math = () => {
  const sum = (a, b) => a + b;
  const sub = (a, b) => a - b;
  const mult = (a, b) => a * b;
  const div = (a, b) => a / b;

  return {
    sum,
    sub,
    mult,
    div,
  };
};