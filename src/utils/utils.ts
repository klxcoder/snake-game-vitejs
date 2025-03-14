export function getRandomInt(a: number, b: number) {
  return Math.floor(Math.random() * (b - a + 1)) + a;
}

export function getRandomHSLColor() {
  const hue = Math.floor(Math.random() * 360); // 0-359
  return `hsl(${hue}, 100%, 50%)`;
}
