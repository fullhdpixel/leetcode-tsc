import { TestData } from "./stack.testData";
import { stack } from "./stack";

describe("stack", () => {
  it.each(TestData)("calculates correct crate", (testObject) => {
    expect(stack(testObject.input)).toEqual(
      testObject.output
    );
  });
});

