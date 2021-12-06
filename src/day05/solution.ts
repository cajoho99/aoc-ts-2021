// Advent of Code - Day 5 - Part One

import math from 'mathjs'
import _ from 'lodash'
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
    const x1 = r[0][0]
    const x2 = r[1][0]
    const y1 = r[0][1]
    const y2 = r[1][1]
    if (x1 === x2) {
      const x = x1
      const max = y1 > y2 ? y1 : y2
      const min = y1 <= y2 ? y1 : y2
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
    } else if (y1 === y2) {
      const y = y1
      const max = x1 > x2 ? x1 : x2
      const min = x1 <= x2 ? x1 : x2
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
    } else if ((x1 - x2) * (x1 - x2) === (y1 - y2) * (y1 - y2)) {
      const rx = _.range(x1, x1 < x2 ? x2 + 1 : x2 - 1, x1 < x2 ? 1 : -1)
      const ry = _.range(y1, y1 < y2 ? y2 + 1 : y2 - 1, y1 < y2 ? 1 : -1)
      const rm = _.zip(rx, ry)
      for (const [ix, iy] of rm) {
        const mapVal = map.get(ix + ',' + iy)
        if (mapVal === undefined) {
          map.set(ix + ',' + iy, 1)
        } else {
          if (mapVal === 1) {
            result++
          }
          map.set(ix + ',' + iy, mapVal + 1)
        }
      }
    }
  })
  // debugPrint(map)
  // console.log(map.get('7,4'))
  return result
}
