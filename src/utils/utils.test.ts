import { describe, expect, it } from 'vitest';
import { getRandomHSLColor, getRandomInt } from './utils';

describe('getRandomInt', () => {
  it('getRandomInt', () => {
    expect(getRandomInt(0, 10)).toBeGreaterThan(-1)
    expect(getRandomInt(0, 10)).toBeLessThan(11)
  });
});

describe('getRandomHSLColor', () => {
  it('getRandomHSLColor()', () => {
    expect(getRandomHSLColor()).toBeTruthy()
  });
});