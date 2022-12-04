import { addTwoNumbers } from "./addTwoNumbers";
import { TestData } from "./addTwoNumbers.testData";

describe("addTwoNumbers", () => {
  it.each(TestData)("Adds two reversed number[]", (testObject) => {
    expect(addTwoNumbers(testObject.input.l1, testObject.input.l2)).toEqual(
      testObject.output
    );
  });
});
