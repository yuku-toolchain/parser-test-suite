var arrayLike = {
  0: "a",
  1: "b",
  get 2() {},
  3: "c",
  length: 4
};
var result = Array.prototype.toSpliced.call(arrayLike, 2, 1);