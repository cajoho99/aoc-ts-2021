// Advent of Code - Day 7 - Part One

import _ from "lodash";

export function evaluate_p1(list: number[], n: number): number {
  let sum = 0;
  list.forEach(l => {
    sum += Math.abs(l - list[n])
  });
  return sum
}

export function evaluate_p2(list: number[], n:number) : number {
  let sum = 0;
  list.forEach(l => {
    
    const abs = Math.abs(l - n)
    // // console.log("list value", list[n], "sum for ", abs, "is ",  abs*(1+abs)/ 2)
    sum += abs*(1+abs)/2
    // const newRange = _.range(1,abs+1)
    // newRange.forEach(a => sum+=a)
  });
  return sum
}

export function part1(input: string): number {
  const numbers = input.split(",").map(s=>+s);

  //sort list
  const sorted = _.sortBy(numbers)
  // const min = sorted[0]
  // const max = sorted[sorted.length - 1]
  // let index = Math.round(min+(min+max)/2)
//   const mean = Math.round(_.mean(sorted))
//   const median = 

//   const closestMean = numbers.sort((a, b) => {
//     return Math.abs(mean - a) - Math.abs(mean - b);
// })[0]
//   const indexOfClosestMean = sorted.indexOf(closestMean)
//   let index = indexOfClosestMean;
  let index = Math.round(sorted.length/2)

  const found = false;

  while(!found)
  {
    const value = evaluate_p1(sorted, index)
    console.log("index:", index, "value:", value )


    const valp = evaluate_p1(sorted, index + 1)
    const valn = evaluate_p1(sorted, index - 1)

    if(value <= valp && value <= valn) {
      return value
    }
    else if(valn < valp && valn < value) {
      index = index - 1
    }
    else if(valn > valp && valp < value)
    {
      index = index + 1
    }
    else{
      console.log("resonable")
    }
  }

  return -1;
}

// Advent of Code - Day 7 - Part Two

export function part2(input: string): number {
  const numbers = input.split(",").map(s=>+s);

  //sort list
  const sorted = _.sortBy(numbers)
  const mean = Math.round(_.mean(sorted))
  const closestMean = numbers.sort((a, b) => {
    return Math.abs(mean - a) - Math.abs(mean - b);
  })[0]

  let currentValue = closestMean;
  const found = false;

  while(!found)
  {
    const value = evaluate_p2(sorted, currentValue)


    const valp = evaluate_p2(sorted, currentValue + 1)
    const valn = evaluate_p2(sorted, currentValue - 1)
    if(value <= valp && value <= valn) {
    
      console.log("index:", currentValue, "value:", value )

      return value
    }
    else if(valn < valp && valn < value) {
      currentValue = currentValue - 1
    }
    else if(valn > valp && valp < value)
    {
      currentValue = currentValue + 1
    }
    else{
      console.log("resonable")
    }
  }

  return 0;
}
