// Advent of Code - Day 1 - Part Two

export function part2(input: string): number {
  const values: number[] = input.split("\n").map(s => +s);
  let inc = 0;
  for (let i = 3; i < values.length; i++) {
    const curr = values[i] + values[i-1] + values [i-2];
    const prev = values[i-1] + values[i-2] + values [i-3];
    if(curr>prev){
      inc++;
    }
  }
  return inc;
}
