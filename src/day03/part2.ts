// Advent of Code - Day 3 - Part Two

// function getMostCommon(arr: number[][], index: number): number{
//   let ones = 0;
//   let zeros = 0;

//   arr.forEach(n => n == 0 ? zeros++ : ones++);

//   if(ones === zeros) {
//     return 1;
//   }
//   else {
//     return ones > zeros ? 1 : 0;
//   }
// }

// function getHorizontal(l: number[][], index: number) : number[]{
//   const newList : number[] = [];
//   l.forEach(n => {
//     newList.push(n[index]);
//   });
//   return newList;
// }

// bit == 0 for oxygen and 1 for co2
// function getSubset(l: number[][], index: number, bit: (0|1)): number[][]{
//   const newList : number[][] = [];
//   //console.log("bit: ", bit, " index: ", index, " list ", l);
//   if(l[0].length == 1) {
//     return l;
//   }
//   const mostCommon: number = getMostCommon(l[index]);
//   //console.log("Most common ", mostCommon);
//   l
//   for (let i = 0; i < l[index].length; i++) {
//     if(bit == 0) {
//       if(mostCommon == l[index][i]) {
//         newList.push(getHorizontal(l, i));
//       }      
//     }
//     else{
//       if(mostCommon != l[index][i]) {
//         newList.push(getHorizontal(l, i));
//       } 
//     }
//   }

//   const values: number[][] = [];
//   for(let i = 0; i < l.length; i++){
//     values.push([]);
//   }
//   newList.forEach(e => {
//     for (let i = 0; i < values.length; i++) {
//         values[i].push(e[i]);
//     }
//   });

//   return values;
// }

enum Ratings {
  Oxygen,
  CO2
}

function getMostCommonOfIndex(values: number[][], index: number) : (0|1)
{
  let ones = 0;
  let zeroes = 0;

  values.forEach(r => r[index] == 0 ? zeroes++:ones++);

  return ones >= zeroes ? 1 : 0;
}

function doSteps(values: number[][], index: number, ratings: Ratings) {
  const newVal: number[][] = [];
  const mostCommon : (0|1) = getMostCommonOfIndex(values, index);
  if(values.length === 1) {
    return values;
  }
  if (ratings === Ratings.Oxygen) {
    values.forEach(r => {
      if(r[index] === mostCommon){
        newVal.push(r);
      }
    });
  }
  else if(ratings === Ratings.CO2){
    values.forEach(r => {
      if(r[index] !== mostCommon){
        newVal.push(r);
      }
    });
  }
  return newVal;
}

export function part2(input: string): number {
  const values: number[][] = input.split("\n").map(s=>s.split("").map(s => +s));
  
  let oxyList: number[][] = values;
  let coList: number[][] = values;
  for (let i = 0; i < values[0].length; i++) {
    oxyList = doSteps(oxyList, i, Ratings.Oxygen);
    coList = doSteps(coList, i, Ratings.CO2);
  }

  const oxy = parseInt(oxyList[0].join(""), 2);
  const co = parseInt(coList[0].join(""), 2);

  return oxy * co;
}
