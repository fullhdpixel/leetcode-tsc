export type stringTuple = [string, string];

function splitHalf(s: string): stringTuple {
  return [s.slice(0, s.length / 2), s.slice(s.length / 2)]
}

export function duplicateChar(tuple: stringTuple): string | undefined {
  return tuple[0]
    .split("")
    .filter(a => tuple[1].includes(a))
    .reduce((prev, cur) => prev.includes(cur) ? prev : prev + cur, "")
}

// Lowercase item types a through z have priorities 1 through 26.
// Uppercase item types A through Z have priorities 27 through 52.
export function getCharScore(char: string): number {
  const score = parseInt(char, 36)
  // Check if its lowercase
  return char.toLowerCase() === char ? score - 9 : score + 17;
}

export function rucksack(s: string): number {
  const compartments = s
    .split("\n")
    .filter(a => !!a)
    .map(splitHalf)

  const duplicates = compartments
    .map(duplicateChar)

  return duplicates
    .reduce((prev, cur) => prev + getCharScore(cur), 0)
}
