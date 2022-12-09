import { getMatchResolution, roundScore, shapeScore } from "../rpc";

type RoundEnd = "X" | "Y" | "Z"; // Lose (X), Draw (Y), End (Z)

type ShapeOpponent = "A" | "B" | "C"; // Rock (A), Paper (B), Scissors (C)
type ShapeMyself = "Rock" | "Paper" | "Scissors"

// ShapeOpponent + RoundEnd => ShapeMyself

const gameStructure: Record<ShapeOpponent, Record<RoundEnd, ShapeMyself>> = {
  "A": {
    // Lose from Rock
    "X": "Scissors",
    // Draw from Rock
    "Y": "Rock",
    // Win from Rock
    "Z": "Paper",
  },
  "B": {
    // Lose from Paper
    "X": "Rock",
    // Draw from Paper
    "Y": "Paper",
    // Win from Paper
    "Z": "Scissors",
  },
  "C": {
    // Lose from Scissors
    "X": "Paper",
    // Draw from Scissors
    "Y": "Scissors",
    // Win from Scissors
    "Z": "Rock",
  },
}

const myselfShapes: Record<ShapeMyself, RoundEnd> = {
  "Rock": "X",
  "Paper": "Y",
  "Scissors": "Z"
}

function getShapeMyself([shapeOpponent, roundEnd]: [ShapeOpponent, RoundEnd]): RoundEnd {
  return myselfShapes[gameStructure[shapeOpponent][roundEnd]]
}

export function calculateScore(s: string) {
  const opponentAndEndings = s.split("\n")
    .filter(a => !!a)
    .map(r => r.split("")
      .filter(a => !!a.trim())) as [ShapeOpponent, RoundEnd][]

  const rounds = opponentAndEndings
    .map(a => [a[0], getShapeMyself(a)]) as [ShapeOpponent, RoundEnd][]

  const roundPoints = rounds
    .map((round) => getMatchResolution(round))
    .map(roundResolution => roundScore[roundResolution])
    .reduce((prev, cur) => prev + cur, 0)

  const shapePoints = rounds
    .map(round => round[1])
    .map(shape => shapeScore[shape])
    .reduce((prev, cur) => prev + cur, 0)

  return roundPoints + shapePoints;
}

