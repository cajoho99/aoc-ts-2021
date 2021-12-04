// Advent of Code - Day 3 - Part One

function getMostCommon(arr: number[]): number{
  let ones = 0;
  let zeros = 0;

  arr.forEach(n => n == 0 ? zeros++ : ones++);

  if(ones === zeros) {
    throw new Error();
  }

  return ones > zeros ? 1 : 0;

}

export function part1(input: string): number {
  const strings = input.split("\n");
  const values: number[][] = [];
  for(let i = 0; i < strings[0].length; i++){
    values.push([]);
  }

  strings.map(s => {
    for (let i = 0; i < values.length; i++) {
      values[i].push(+s[i]);
    }
  });

  const gammaStr: number[] = [];
  values.forEach(n => {
   gammaStr.push(getMostCommon(n)) 
  });
  
  const gammaConc = gammaStr.join("");
  const gamma = parseInt(gammaConc, 2);
  const eConc : string = gammaStr.map(n => n == 0 ? 1:0).join("");
  const epsilon = parseInt(eConc, 2);

  return gamma*epsilon;

}
