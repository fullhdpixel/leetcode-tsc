type RoundResolution = "lost" | "draw" | "won";
type RoundScore = 0 | 3 | 6;

type ShapeOpponent = "A" | "B" | "C"; // Rock (A), Paper (B), Scissors (C)
type ShapeMyself = "X" | "Y" | "Z"; // Rock (X), Paper (Y), Scissors (Z)
type ShapeScore = 1 | 2 | 3;

export const shapeScore: Record<ShapeMyself, ShapeScore> = {
  "X": 1,
  "Y": 2,
  "Z": 3
}

export const roundScore: Record<RoundResolution, RoundScore> = {
  "lost": 0,
  "draw": 3,
  "won": 6,
}

const draw: Record<ShapeOpponent, ShapeMyself> = {
  "A": "X",
  "B": "Y",
  "C": "Z",
}

// if myself is winning
const winning: Record<ShapeOpponent, ShapeMyself> = {
  "A": "Y",
  "B": "Z",
  "C": "X"
}


export function getMatchResolution([opponent, myself]: [ShapeOpponent, ShapeMyself]): RoundResolution {
  if (draw[opponent] === myself) {
    return "draw"
  } else if (winning[opponent] === myself) {
    return "won"
  } else {
    return "lost"
  }
}

export function calculateScore(s: string) {
  const rounds = s.split("\n")
    .filter(a => !!a)
    .map(r => r.split("")
      .filter(a => !!a.trim())) as [ShapeOpponent, ShapeMyself][]

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

