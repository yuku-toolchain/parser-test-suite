const s1 = new Set([1, 2]);
const s2 = {
  size: undefined,
  has: () => {},
  keys: function* keys() {
    yield 2;
    yield 3;
  }
};
s2.size = NaN;
let coercionCalls = 0;
s2.size = {
  valueOf: function () {
    ++coercionCalls;
    return NaN;
  }
};
s2.size = 0n;
s2.size = "string";