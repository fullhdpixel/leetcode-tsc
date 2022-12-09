import { TestData } from "./rpc.testData";
import { calculateScore } from "./rpc";

describe("rpc", () => {
  it.each(TestData)("calculate score correctly", (testObject) => {
    expect(calculateScore(testObject.input)).toEqual(
      testObject.output
    );
  });
});

