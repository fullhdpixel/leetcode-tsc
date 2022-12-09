import { duplicateChar, getCharScore } from "../rucksack";

type stringTuple = [string, string, string]

// ["1", "2", "3", "4", "5", "6"] => [["1", "2", "3"], ["4", "5", "6"]]
function toTuple(s: string[]): stringTuple[] {
  const result: stringTuple[] = [];

  let i = 0;
  while (i < s.length) {
    result.push([s[i], s[i + 1], s[i + 2]]);
    i += 3;
  }

  return result;
}

export function rucksack(s: string): number {
  const rucksacks = s
    .split("\n")
    .filter(a => !!a)

  const groups = toTuple(rucksacks)
  const duplicateCharsInGroups = groups
    .map(item => duplicateChar([
      duplicateChar([item[0], item[1]]),
      item[2]
    ]))

  return duplicateCharsInGroups
    .reduce((prev, cur) => prev + getCharScore(cur), 0)
}
