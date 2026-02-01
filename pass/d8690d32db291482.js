const setlikeWithMinusZero = {
  size: 1,
  has: function () {},
  keys: function () {
    return [-0].values();
  }
};
const s1 = new Set([1]);
let expected = [1, +0];
let combined = s1.union(setlikeWithMinusZero);
const s2 = new Set([+0]);
expected = [+0];
combined = s2.union(setlikeWithMinusZero);