var arr = Object.freeze([2, 0, 1]);
var result = arr.toSorted();
var arrayLike = Object.freeze({
  length: 3,
  0: 2,
  1: 0,
  2: 1
});
result = Array.prototype.toSorted.call(arrayLike);