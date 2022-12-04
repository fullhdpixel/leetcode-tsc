function sumNumArray(arr: number[]) {
  return parseInt(arr.join(""));
}

/**
 * Adds two reversed number[]
 */
function addTwoNumbers(l1: number[], l2: number[]): number[] {
  const sum = sumNumArray(l1.reverse()) + sumNumArray(l2.reverse());

  return sum
    .toString()
    .split("")
    .map((item) => parseInt(item))
    .reverse();
}

export { addTwoNumbers };
