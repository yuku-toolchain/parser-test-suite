var callCount = 0;
class C {
  static *#gen() {
    callCount += 1;
    yield {
      ...yield,
      y: 1,
      ...yield yield
    };
  }
  static get gen() {
    return this.#gen;
  }
}
var iter = C.gen();
iter.next();
iter.next({
  x: 42
});
iter.next({
  x: 'lol'
});
var item = iter.next({
  y: 39
});