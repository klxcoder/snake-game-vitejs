import { describe, expect, it } from 'vitest';
import { add } from './add';

describe('add function', () => {
  it('adds two numbers correctly', () => {
    expect(add(1, 2)).toBe(3);
    expect(add(-1, -2)).toBe(-3);
    expect(add(0, 0)).toBe(0);
  });
});
