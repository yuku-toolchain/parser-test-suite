const setlikeWithMinusZero = {
  size: 1,
  has: function () {},
  keys: function () {
    return [-0].values();
  }
};
const s1 = new Set([1, 2]);
let expected = [1, 2, +0];
let combined = s1.symmetricDifference(setlikeWithMinusZero);