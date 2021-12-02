// Advent of Code - Day 1 - Part One

export function part1(input: string): number {
  const values: number[]= input.split("\n").map(s => +s);
  let inc = 0;
  for (let i = 0; i < values.length; i++) {
    const curr = values[i];
    const prev = values[i-1];
    if(curr>prev){
      inc++;
    }
  }
  return inc;
}
