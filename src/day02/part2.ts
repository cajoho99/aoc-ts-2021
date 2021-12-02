// Advent of Code - Day 2 - Part Two

import { Direction, Instruction, Submarine, parseInstructions } from "./common";



export function part2(input: string): number {
  const instructions: Instruction[] = parseInstructions(input);
  let sub: Submarine = {
    horizontal: 0,
    depth: 0,
    aim: 0,
  }
  instructions.forEach(i => {
    switch (i.dir) {
      case Direction.Forward:
        sub.horizontal += i.value;
        sub.depth += sub.aim * i.value;
        break;
      case Direction.Up:
        sub.aim -= i.value; break;
      case Direction.Down:
        sub.aim += i.value; break;
    }
  });
  return sub.depth * sub.horizontal;
}
