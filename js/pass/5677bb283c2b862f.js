function fn(e) {
  return [39, e * 2];
}
var a;
var actual;
a = {
  length: 3,
  0: 1,
  2: 21,
  get 3() {
    throw 'it should not get this property';
  }
};
actual = [].flatMap.call(a, fn);
a = {
  length: undefined,
  get 0() {
    throw 'it should not get this property';
  }
};
actual = [].flatMap.call(a, fn);
var called = false;
a = {
  get length() {
    if (!called) {
      called = true;
      return 2;
    } else {
      throw 'is should get the length only once';
    }
  },
  0: 21,
  1: 19.5,
  get 2() {
    throw 'it should not get this property';
  }
};
actual = [].flatMap.call(a, fn);
a = {
  length: 10001,
  [10000]: 7
};
actual = [].flatMap.call(a, fn);