// Advent of Code - Day 3

import { part1, part2 } from '../src/day03';

const input = "00100\n11110\n10110\n10111\n10101\n01111\n00111\n11100\n10000\n11001\n00010\n01010"

test('part one test', () => {
  expect(part1(input)).toBe(198);
});

test('part two test', () => {
  expect(part2(input)).toBe(230);
});
