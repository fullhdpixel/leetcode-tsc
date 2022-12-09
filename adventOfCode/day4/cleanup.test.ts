import { TestData } from "./cleanup.testData";
import { cleanup } from "./cleanup";

describe("cleanup", () => {
  it.each(TestData)("calculate # of fully overlapping pairs correctly", (testObject) => {
    expect(cleanup(testObject.input)).toEqual(
      testObject.output
    );
  });
});

