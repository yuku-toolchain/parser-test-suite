const setlikeWithMinusZero = {
  size: 1,
  has: function () {},
  keys: function () {
    return [-0].values();
  }
};
const s1 = new Set([+0, 1]);
let expected = [1];
let combined = s1.difference(setlikeWithMinusZero);