// Advent of Code - Day 4

import { part1, part2 } from '../src/day04'
import { readFile } from 'fs/promises'

let input: string

beforeEach(() => {
  return readFile('src/day04/resources/test_input.txt', 'utf8').then(
    (s) => (input = s)
  )
})

test('part one test', () => {
  console.log('input: ', input)
  expect(part1(input)).toBe(4512)
})

test('part two test', () => {
  expect(part2(input)).toBe(1924)
})
