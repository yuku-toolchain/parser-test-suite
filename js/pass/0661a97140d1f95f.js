let getterCallCount = 0;
let o = {
  get a() {
    return ++getterCallCount;
  }
};
var callCount = 0;
new (function (obj) {
  callCount += 1;
})({
  ...o,
  c: 4,
  d: 5,
  a: 42,
  ...o
});