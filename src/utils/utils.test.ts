import { describe, expect, it } from 'vitest';
import { getRandomHSLColor, getRandomInt } from './utils';

describe('getRandomInt', () => {
  it('returns an integer within the given range', () => {
    for (let i = 0; i < 100; i++) {
      const result = getRandomInt(5, 10)
      expect(result).toBeGreaterThanOrEqual(5);
      expect(result).toBeLessThanOrEqual(10);
      expect(result % 1).toBe(0); // Ensure it's an integer
    }
  });
});

describe('getRandomHSLColor', () => {
  it('returns a valid HSL color string', () => {
    for (let i = 0; i < 100; i++) {
      const color = getRandomHSLColor()
      expect(color).toMatch(/^hsl\((\d{1,3}), 100%, 50%\)$/)
      const hue = Number(color.match(/\d+/)?.[0]);
      expect(hue).toBeGreaterThanOrEqual(0);
      expect(hue).toBeLessThan(360);
    }
  });
});