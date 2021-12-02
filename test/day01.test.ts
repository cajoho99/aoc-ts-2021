// Advent of Code - Day 1

import { part1, part2 } from '../src/day01';


test('part one test', () => {
  expect(part1("199\n200\n208\n210\n200\n207\n240\n269\n260\n263")).toBe(7);
});

test('part two test', () => {
  expect(part2("199\n200\n208\n210\n200\n207\n240\n269\n260\n263")).toBe(5);
});
