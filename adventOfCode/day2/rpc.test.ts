import { TestData1 } from "./rpc.testData";
import { calculateScore } from "./rpc";

describe("rpc", () => {
  it.each(TestData1)("calculate score correctly", (testObject) => {
    expect(calculateScore(testObject.input)).toEqual(
      testObject.output
    );
  });
});

// describe("rpc 2", () => {
//   it.each(TestData2)("calculate score correctly", (testObject) => {
//     expect(calculateScore2(testObject.input)).toEqual(
//       testObject.output
//     );
//   });
// });

