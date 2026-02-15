function* g() {
  yield 1;
  yield 2;
}
let iterator = g().drop(2);
let {value, done} = iterator.next();