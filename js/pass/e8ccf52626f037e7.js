class MySetLike {
  constructor() {
    this.size = 2;
    this.has = () => {};
    this.keys = function* keys() {
      yield 2;
      yield 3;
    };
  }
}
const s1 = new MySetLike();
const s2 = new Set();
const s3 = {
  size: 2,
  has: () => {},
  keys: function* keys() {
    yield 2;
    yield 3;
  }
};