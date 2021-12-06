// Advent of Code - Day 6 - Part One

function parse(input: string): number[] {
  return input.split(',').map((s) => +s)
}

function simulate(fish: number[], days: number) {}

export function part1(input: string): number {
  const fish = parse(input)
  // main loop
  for (let day = 0; day < 80; day++) {
    // Decrease days
    for (let i = 0; i < fish.length; i++) {
      fish[i]--
    }
    const noOldFishes = fish.length
    for (let oldFish = 0; oldFish < noOldFishes; oldFish++) {
      if (fish[oldFish] < 0) {
        fish[oldFish] = 6
        fish.push(8)
      }
    }
  }
  return fish.length
}

// Advent of Code - Day 6 - Part Two

export function part2(input: string): number {
  const inputFish = parse(input)

  let counterList = [0, 0, 0, 0, 0, 0, 0, 0, 0]

  inputFish.forEach((n) => {
    counterList[n]++
  })

  for (let day = 0; day < 256; day++) {
    const counterListNewPlacements = [0, 0, 0, 0, 0, 0, 0, 0, 0]
    for (let i = 8; i >= 0; i--) {
      if (i > 0) {
        // console.log('day', day, 'age', i, counterList[i], 'moved to ', i - 1)
        counterListNewPlacements[i - 1] += counterList[i]
      } else if (i === 0) {
        console.log('counterList', counterList[i])
        counterListNewPlacements[8] += counterList[i]
        counterListNewPlacements[6] += counterList[i]
      }
    }
    console.log('new', counterListNewPlacements)
    counterList = counterListNewPlacements
  }
  console.log(counterList)

  return counterList.reduce((p, c) => p + c)
}
