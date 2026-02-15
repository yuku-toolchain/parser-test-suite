var order = 0;
async function* g() {
  yield 'first';
  yield 'second';
}
var iter = g();
var item1 = iter.next();
var item2 = iter.next();
var item3 = iter.next();
var resolvedorder = 0;
Promise.all([item3.then(function (result) {
  resolvedorder++;
}), item2.then(function (result) {
  resolvedorder++;
}), item1.then(function (result) {
  resolvedorder++;
})]).then(function () {}, $DONE);