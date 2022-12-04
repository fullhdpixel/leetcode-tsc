import { twoSum } from "./twoSum";
import { TestData } from "./twoSum.testData";

describe("twoSum", () => {
  it.each(TestData)(
    "Returns two indexes in nums which can be summed to reach target",
    (testObject) => {
      expect(twoSum(testObject.input.arr, testObject.input.target)).toEqual(
        testObject.output
      );
    }
  );
});
