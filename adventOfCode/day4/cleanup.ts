type StringTuple = [string, string];

function pairToSections(rangeString: string): number[] {
  const [a,b] = rangeString.split("-");

  return Array(parseInt(b) - parseInt(a) + 1)
    .fill(1)
    .map((_, index) => index + parseInt(a));
}

export function cleanup(s: string): number {
  const pairs = s
    .split("\n")
    .filter(a => !!a)
    .map(a => a.split(",")) as StringTuple[];

  return pairs
    .map(pair => [
      pairToSections(pair[0]), pairToSections(pair[1])
    ])
    .reduce((prev, rangePair) => {
      if (rangePair[0].every(a => rangePair[1].includes(a))
        || rangePair[1].every(b => rangePair[0].includes(b))) {
        return prev + 1;
      } else {
        return prev
      }
    }, 0)
}
