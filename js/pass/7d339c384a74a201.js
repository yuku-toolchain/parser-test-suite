function* g() {
  let o = {
    [yield 10]: 1,
    a: 'a'
  };
  yield 20;
  return o;
}
let iter = g();
let outcome = iter.next().value;