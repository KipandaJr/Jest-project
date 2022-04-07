/* eslint-disable no-undef */
import { math } from './math';

const { sum, sub, mult, div } = math();

test('Somando dois numeros', () => expect(sum(1, 2)).toBe(3));
test('Subtraindo dois numeros', () => expect(sub(1, 2)).toBe(-1));
test('Multiplicando dois numeros', () => expect(mult(1, 2)).toBe(2));
test('Dividindo dois numeros', () => expect(div(6, 2)).toBe(3));
