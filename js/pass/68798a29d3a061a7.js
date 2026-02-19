var startIndex = Number.MAX_SAFE_INTEGER - 3;
var arrayLike = {
  0: 0,
  1: 1,
  2: 2,
  length: Number.MAX_SAFE_INTEGER
};
arrayLike[startIndex] = -3;
arrayLike[startIndex + 2] = -1;
Array.prototype.copyWithin.call(arrayLike, 0, startIndex, startIndex + 3);