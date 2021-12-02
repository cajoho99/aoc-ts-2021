// Advent of Code - Day 2

import { part1, part2 } from '../src/day02';

let test_input = "forward 5\ndown 5\nforward 8\nup 3\ndown 8\nforward 2"

test('part one test', () => {
  expect(part1(test_input)).toBe(150);
});

test('part two test', () => {
  expect(part2(test_input)).toBe(900);
});
