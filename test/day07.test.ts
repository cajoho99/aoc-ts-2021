// Advent of Code - Day 7

import { part1, part2, evaluate_p2 } from '../src/day07';

test('part one test', () => {
  expect(part1("16,1,2,0,4,2,7,1,2,14")).toBe(37);
});

test('part two test', () => {
  expect(part2("16,1,2,0,4,2,7,1,2,14")).toBe(168);
});

test('part two eval test', () => {
  expect(evaluate_p2([16], 5)).toBe(66)
})

test('part two eval test 2', () => {
  expect(evaluate_p2([16,1,2,0,4,2,7,1,2,14], 5)).toBe(168)
})
