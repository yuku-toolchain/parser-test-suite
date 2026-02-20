var arr = Object.freeze([2, 0, 1]);
var result = arr.toSpliced();
var arrayLike = Object.freeze({
  length: 3,
  0: 0,
  1: 1,
  2: 2
});