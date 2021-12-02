// Advent of Code - Day 2 - Part One

import { Direction, Instruction, parseInstructions, Submarine } from "./common";



export function part1(input: string): number {
  const instructions: Instruction[] = parseInstructions(input);
  let sub: Submarine = {
    horizontal: 0,
    depth: 0
  }
  instructions.forEach(i => {
    switch (i.dir) {
      case Direction.Forward:
        sub.horizontal += i.value; break;
      case Direction.Up:
        sub.depth -= i.value; break;
      case Direction.Down:
        sub.depth += i.value; break;
    }
  });
  return sub.depth * sub.horizontal;
}
