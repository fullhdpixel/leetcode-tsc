// Object containing {[complement: number]: number}
type index = number;
type NumObject = { [complement: number]: index };

/**
 * Returns two indexes in nums which can be summed to reach target
 */
function twoSum(nums: number[], target: number): number[] {
  let numObject: NumObject = {};

  for (let i = 0; i < nums.length; i++) {
    let current = nums[i];
    let complement = target - current;

    if (numObject[current] !== undefined) {
      return [numObject[current], i];
    }

    numObject[complement] = i;
  }
  return [0, 0];
}

export { twoSum };
