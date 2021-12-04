// Advent of Code - Day 4 - Part Two

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
    if (val) return true
  }
  return false
}

function winningBoardScore(bingo: Bingo, n: number) {
  let sum = 0
  for (let x = 0; x < bingo.board.length; x++) {
    for (let y = 0; y < bingo.board[x].length; y++) {
      if (!bingo.hits[x][y]) {
        sum += bingo.board[x][y]
      }
    }
  }
  return sum * n
}

export function part2(input: string): number {
  const game = parse(input)
  const winningBoards: number[] = []
  let winningBoardsSeq = -1

  for (let i = 0; i < game.seq.length; i++) {
    const n = game.seq[i]
    for (let b_i = 0; b_i < game.boards.length; b_i++) {
      if (!winningBoards.includes(b_i)) {
        const board = game.boards[b_i]
        game.boards[b_i] = checkIfHit(board, n)
        if (checkIfBingo(game.boards[b_i])) {
          winningBoards.push(b_i)
          winningBoardsSeq = n
        }
      }
    }
  }
  let score = winningBoardScore(
    game.boards[winningBoards[winningBoards.length - 1]],
    winningBoardsSeq
  )
  return score
}
