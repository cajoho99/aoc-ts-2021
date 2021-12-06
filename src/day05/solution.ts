// Advent of Code - Day 5 - Part One

function parse(input: string): number[][][] {
  return input
    .split('\n')
    .map((r) => r.split(' -> ').map((c) => c.split(',').map((n) => +n)))
}

function debugPrint(map: Map<string, number>) {
  const out: string[] = []
  for (let y = 0; y < 10; y++) {
    for (let x = 0; x < 10; x++) {
      const val = map.get(x + ',' + y)

      out.push(val ? val.toString() : '.')
    }
    out.push('\n')
  }
  console.log('Debug print\n' + out.join(''))
  console.log('Logs', map)
}

export function part1(input: string): number {
  const list = parse(input)
  let result = 0
  const map = new Map<string, number>()

  list.forEach((r) => {
    if (r[0][0] === r[1][0]) {
      const x = r[0][0]
      const max = r[0][1] > r[1][1] ? r[0][1] : r[1][1]
      const min = r[0][1] <= r[1][1] ? r[0][1] : r[1][1]
      for (let y = min; y <= max; y++) {
        const mapVal = map.get(x + ',' + y)
        if (mapVal === undefined) {
          map.set(x + ',' + y, 1)
        } else {
          if (mapVal === 1) {
            result++
          }
          map.set(x + ',' + y, mapVal + 1)
        }
      }
    } else if (r[0][1] === r[1][1]) {
      const y = r[0][1]
      const max = r[0][0] > r[1][0] ? r[0][0] : r[1][0]
      const min = r[0][0] <= r[1][0] ? r[0][0] : r[1][0]
      for (let x = min; x <= max; x++) {
        const mapVal = map.get(x + ',' + y)
        if (mapVal === undefined) {
          map.set(x + ',' + y, 1)
        } else {
          if (mapVal === 1) {
            result++
          }
          map.set(x + ',' + y, mapVal + 1)
        }
      }
    }
  })
  debugPrint(map)
  // console.log(map.get('7,4'))
  return result
}

// Advent of Code - Day 5 - Part Two

export function part2(input: string): number {
  const list = parse(input)
  let result = 0
  const map = new Map<string, number>()

  list.forEach((r) => {
    if (r[0][0] === r[1][0]) {
      const x = r[0][0]
      const max = r[0][1] > r[1][1] ? r[0][1] : r[1][1]
      const min = r[0][1] <= r[1][1] ? r[0][1] : r[1][1]
      for (let y = min; y <= max; y++) {
        const mapVal = map.get(x + ',' + y)
        if (mapVal === undefined) {
          map.set(x + ',' + y, 1)
        } else {
          if (mapVal === 1) {
            result++
          }
          map.set(x + ',' + y, mapVal + 1)
        }
      }
    } else if (r[0][1] === r[1][1]) {
      const y = r[0][1]
      const max = r[0][0] > r[1][0] ? r[0][0] : r[1][0]
      const min = r[0][0] <= r[1][0] ? r[0][0] : r[1][0]
      for (let x = min; x <= max; x++) {
        const mapVal = map.get(x + ',' + y)
        if (mapVal === undefined) {
          map.set(x + ',' + y, 1)
        } else {
          if (mapVal === 1) {
            result++
          }
          map.set(x + ',' + y, mapVal + 1)
        }
      }
    } else if (r[0][0] === r[0][1] && r[1][0] === r[1][1]) {
      const max = r[0][0] > r[1][0] ? r[0][0] : r[1][0]
      const min = r[0][0] <= r[1][0] ? r[0][0] : r[1][0]
      for (let i = min; i <= max; i++) {
        const mapVal = map.get(i + ',' + i)
        if (mapVal === undefined) {
          map.set(i + ',' + i, 1)
        } else {
          if (mapVal === 1) {
            result++
          }
          map.set(i + ',' + i, mapVal + 1)
        }
      }
    } else if (r[0][0] === r[1][1] && r[0][1] === r[1][0]) {
      const max = r[0][0] > r[0][1] ? r[0][0] : r[0][1]
      const min = r[0][0] <= r[0][1] ? r[0][0] : r[0][1]
      console.log(r, min, max)
      for (let y = min; y <= max; y++) {
        const x = max - y
        // Check condition
        console.log(x + ',' + y)
        const mapVal = map.get(x + ',' + y)
        if (mapVal === undefined) {
          map.set(x + ',' + y, 1)
        } else {
          if (mapVal === 1) {
            result++
          }
          map.set(x + ',' + y, mapVal + 1)
        }
      }
    } else {
      console.log('Hit different: ', r)
    }
  })
  debugPrint(map)
  // console.log(map.get('7,4'))
  return result
}
