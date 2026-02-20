var arrayLike = {
  length: "2",
  0: 1,
  1: 2,
  2: 3
};
var arrayLike = {
  length: {
    valueOf: () => 2
  },
  0: 1,
  1: 2,
  2: 3
};