let calls = 0;
const stringable = {
  toString: function toString() {
    return 1;
  }
};
const array = [1, '1', stringable];
const map = Map.groupBy(array, function (v) {
  return v;
});