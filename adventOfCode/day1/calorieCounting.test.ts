import { countCalories, top3total } from "./calorieCounting";
import { TestData1, TestData2 } from "./calorieCounting.testData";

describe("calorieCounting", () => {
  it.each(TestData1)("Calorie counting", (testObject) => {
    expect(countCalories(testObject.input)).toEqual(
      testObject.output
    );
  });
});

describe("calorieCounting", () => {
  it.each(TestData2)("top3total", (testObject) => {
    expect(top3total(testObject.input)).toEqual(
      testObject.output
    );
  });
});
