let arr = [{
  [Symbol.iterator]: function () {}
}, {
  next: function () {}
}];
function* g() {
  yield arr;
}
let iter = g().flatMap(v => v);