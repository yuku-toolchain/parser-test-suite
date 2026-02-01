var arrayLike = {
  length: Number.MAX_SAFE_INTEGER
};
arrayLike[Number.MAX_SAFE_INTEGER - 1] = 1;
arrayLike[Number.MAX_SAFE_INTEGER - 3] = 3;
var accumulator = function (acc, el, index) {
  acc.push([el, index]);
  if (el === 3) {
    throw acc;
  }
  return acc;
};
try {
  Array.prototype.reduceRight.call(arrayLike, accumulator, []);
} catch (acc) {}