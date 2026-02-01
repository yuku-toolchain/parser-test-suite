var callCount = 0;
class C {
  async *gen() {
    callCount += 1;
    yield {
      ...yield,
      y: 1,
      ...yield yield
    };
  }
}
var gen = C.prototype.gen;
var iter = gen();
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
item.then(({done, value}) => {}).then($DONE, $DONE);