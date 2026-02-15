var callCount = 0;
function* gen() {
  callCount += 1;
  yield {
    ...yield,
    y: 1,
    ...yield yield
  };
}
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