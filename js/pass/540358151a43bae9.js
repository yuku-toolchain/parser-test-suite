var value = {};
var startIndex = Number.MAX_SAFE_INTEGER - 3;
var arrayLike = {
  length: Number.MAX_SAFE_INTEGER
};
Array.prototype.fill.call(arrayLike, value, startIndex, startIndex + 3);