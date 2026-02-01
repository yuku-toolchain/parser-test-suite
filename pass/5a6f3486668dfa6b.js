var callCount = 0;
class C {
  *#gen() {
    callCount += 1;
    yield {
      ...yield,
      y: 1,
      ...yield yield
    };
  }
  get gen() {
    return this.#gen;
  }
}
const c = new C();
var iter = c.gen();
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