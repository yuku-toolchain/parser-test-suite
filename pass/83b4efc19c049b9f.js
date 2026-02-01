function* g() {
  yield 0;
  yield 1;
  yield 2;
  yield 3;
}
let iter = g().flatMap((v, count) => {
  let i = 0;
  return {
    next: function () {
      if (i < v) {
        ++i;
        return {
          value: v,
          done: false
        };
      } else {
        return {
          value: undefined,
          done: true
        };
      }
    }
  };
});