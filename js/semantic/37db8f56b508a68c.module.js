var s = Symbol('s');
var callCount = 0;
var gen = function* g() {
  callCount += 1;
  yield {
    ...yield yield,
    ...(function (arg) {
      var yield = arg;
      return {
        ...yield
      };
    })(yield),
    ...yield
  };
};
var iter = gen();
var iter = gen();
iter.next();
iter.next();
iter.next({
  x: 10,
  a: 0,
  b: 0,
  [s]: 1
});
iter.next({
  y: 20,
  a: 1,
  b: 1,
  [s]: 42
});
var item = iter.next({
  z: 30,
  b: 2
});
var value = item.value;