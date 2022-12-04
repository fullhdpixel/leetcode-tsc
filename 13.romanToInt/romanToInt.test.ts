import { romanToInt } from "./romanToInt";
import { TestData } from "./romanToInt.testData";

describe("romanToInt", () => {
  it.each(TestData)("Converts roman characters to number", (testObject) => {
    expect(romanToInt(testObject.input)).toEqual(testObject.output);
  });
});
