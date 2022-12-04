const TestData = [
  {
    input: {
      arr: [],
      target: 0,
    },
    output: [0, 0],
  },
  {
    input: {
      arr: [3, 2, 4],
      target: 6,
    },
    output: [1, 2],
  },
  {
    input: {
      arr: [1, 2, 3],
      target: 3,
    },
    output: [0, 1],
  },
  {
    input: {
      arr: [4, 8, 12],
      target: 12,
    },
    output: [0, 1],
  },
];

export { TestData };
