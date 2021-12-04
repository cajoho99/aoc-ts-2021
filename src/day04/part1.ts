// Advent of Code - Day 4 - Part One

import { all } from 'mathjs'

interface Bingo {
  board: number[][]
  hits: boolean[][]
}

interface Game {
  boards: Bingo[]
  seq: number[]
}

function parse(input: string): Game {
  const parse = input.split('\n')
  const seq: number[] = parse[0].split(',').map((s) => +s)

  const boards: Bingo[] = []

  let current: number[][] = []

  parse.slice(2).forEach((l) => {
    if (l === '') {
      boards.push({
        board: current,
        hits: current.map((r) => r.map(() => false)),
      })
      current = []
    } else {
      const line: number[] = l
        .split(' ')
        .filter((s) => s !== '')
        .map((s) => +s)
      current.push(line)
    }
  })
  boards.push({
    board: current,
    hits: current.map((r) => r.map(() => false)),
  })
  return {
    boards: boards,
    seq: seq,
  }
}

function checkIfHit(bingo: Bingo, n: number) {
  for (let x = 0; x < bingo.board.length; x++) {
    for (let y = 0; y < bingo.board[x].length; y++) {
      if (n === bingo.board[x][y]) {
        bingo.hits[x][y] = true
        return bingo
      }
    }
  }
  return bingo
}

function checkIfBingo(bingo: Bingo): boolean {
  // Check rows
  let val = false
  bingo.hits.forEach((r) => {
    if (!r.includes(false)) {
      val = true
    }
  })
  if (val) return true

  // Check columns
  for (let x = 0; x < bingo.hits.length; x++) {
    let val = true
    for (let y = 0; y < bingo.hits[x].length; y++) {
      if (!bingo.hits[y][x]) {
        val = false
      }
    }
    if (val) {
      return true
    }
  }

  // Check diagonals
  // let val = true
  // for (let i = 0; i < bingo.hits.length; i++) {
  //   if (!bingo.hits[i][i]) {
  //     val = false
  //   }
  // }
  // if (val) {
  //   return true
  // }

  // val = true
  // const diag: number[][] = [
  //   [0, 4],
  //   [1, 3],
  //   [2, 2],
  //   [3, 1],
  //   [4, 0],
  // ]
  // diag.forEach((c) => {
  //   if (!bingo.hits[c[0]][c[1]]) {
  //     val = false
  //   }
  // })
  // if (val) {
  //   return true
  // }
  return false
}

export function part1(input: string): number {
  const game = parse(input)

  for (let i = 0; i < game.seq.length; i++) {
    const n = game.seq[i]
    for (let b_i = 0; b_i < game.boards.length; b_i++) {
      const board = game.boards[b_i]
      game.boards[b_i] = checkIfHit(board, n)
      if (checkIfBingo(game.boards[b_i])) {
        let sum = 0
        for (let x = 0; x < game.boards[b_i].board.length; x++) {
          for (let y = 0; y < game.boards[b_i].board[x].length; y++) {
            if (!game.boards[b_i].hits[x][y]) {
              sum += game.boards[b_i].board[x][y]
            }
          }
        }
        return sum * n
      }
    }
  }
  return -1

  // let result = -1

  // let boardThatWon: Bingo
  // let hasWon = false
  // game.seq.forEach((n) => {
  //   if (hasWon) {
  //     return
  //   }
  //   console.log('drawing number', n)
  //   game.boards.forEach((b) => {
  //     b = checkIfHit(b, n)
  //     hasWon = checkIfBingo(b)
  //     if (hasWon) {
  //       boardThatWon = b
  //       console.log('has won', hasWon)
  //       let sum = 0
  //       for (let x = 0; x < boardThatWon.board.length; x++) {
  //         for (let y = 0; y < boardThatWon.board[x].length; y++) {
  //           if (!boardThatWon.hits[x][y]) {
  //             sum += boardThatWon.board[x][y]
  //           }
  //         }
  //       }
  //       result = sum * n
  //       return
  //     }
  //   })
  //   if (hasWon) {
  //     return
  //   }
  // })

  // return result
}
