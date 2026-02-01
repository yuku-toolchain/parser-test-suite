var arr = Object.freeze([0, 1, 2]);
var result = arr.with(1, 3);
var arrayLike = Object.freeze({
  length: 3,
  0: 0,
  1: 1,
  2: 2
});
var result2 = Array.prototype.with.call(arrayLike, 1, 3);