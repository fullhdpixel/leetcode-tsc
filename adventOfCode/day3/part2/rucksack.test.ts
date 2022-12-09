import { TestData } from "./rucksack.testData";
import { rucksack } from "./rucksack";

describe("rucksack", () => {
  it.each(TestData)("calculates sum of priorities correctly", (testObject) => {
    expect(rucksack(testObject.input)).toEqual(
      testObject.output
    );
  });
});

