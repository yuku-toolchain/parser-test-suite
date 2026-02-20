var arr = Object.freeze([0, 1, 2]);
var result = arr.toReversed();
var arrayLike = Object.freeze({
  length: 3,
  0: 0,
  1: 1,
  2: 2
});
result = Array.prototype.toReversed.call(arrayLike);