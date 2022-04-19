// Advent of Code - Day 11

import { part1, part2 } from '../src/day11'

const input =
  '5483143223\n2745854711\n5264556173\n6141336146\n6357385478\n4167524645\n2176841721\n6882881134\n4846848554\n5283751526'

test('part one test', () => {
  expect(part1(input)).toBe(1656)
})

test('part two test', () => {
  expect(part2(input)).toBe(1656)
})
