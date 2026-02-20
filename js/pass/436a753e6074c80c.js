function* g() {
  yield 0;
}
let iter = g().flatMap(v => new String('string'));