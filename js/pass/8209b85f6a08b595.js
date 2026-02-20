function* g() {
  yield 0;
  yield 1;
  yield 2;
}
let closed = g();
closed.return();
closed.return = function () {};
let iter = g().flatMap(v => closed);
let {value, done} = iter.next();