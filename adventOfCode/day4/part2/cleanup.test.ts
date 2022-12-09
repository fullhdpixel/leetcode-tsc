import { TestData } from "./cleanup.testData";
import { cleanup } from "./cleanup";

describe("cleanup", () => {
  it.each(TestData)("calculate # of partial overlapping pairs correctly", (testObject) => {
    expect(cleanup(testObject.input)).toEqual(
      testObject.output
    );
  });
});

