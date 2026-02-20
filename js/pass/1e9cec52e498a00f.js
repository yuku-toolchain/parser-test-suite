var calls = [];
var o = {
  get z() {
    calls.push('z');
  },
  get a() {
    calls.push('a');
  }
};
Object.defineProperty(o, 1, {
  get: () => {
    calls.push(1);
  },
  enumerable: true
});
Object.defineProperty(o, Symbol('foo'), {
  get: () => {
    calls.push("Symbol(foo)");
  },
  enumerable: true
});
var callCount = 0;
(function (obj) {
  callCount += 1;
})({
  ...o
});