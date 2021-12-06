// Advent of Code - Day 5

import { part1, part2 } from '../src/day05'
import { readFile } from 'fs/promises'

let input: string

beforeEach(() => {
  return readFile('src/day05/resources/test_input.txt', 'utf8').then(
    (s) => (input = s)
  )
})

test('part one test', () => {
  expect(part1(input)).toBe(5)
})

test('part two test', () => {
  expect(part2(input)).toBe(12)
})
