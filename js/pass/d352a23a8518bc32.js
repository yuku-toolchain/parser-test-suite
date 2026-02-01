var tooBigLength = Number.MAX_VALUE;
var maxExpectedIndex = 9007199254740990;
var arrayLike = {
  length: tooBigLength
};
var calledWithIndex = [];
Array.prototype.findLastIndex.call(arrayLike, function (_value, index) {
  calledWithIndex.push(index);
  return true;
});