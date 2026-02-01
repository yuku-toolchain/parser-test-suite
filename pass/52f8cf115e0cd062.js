async function* g() {}
var AsyncGeneratorPrototype = Object.getPrototypeOf(g).prototype;
function* syncGenerator() {}
var syncIterator = syncGenerator();
var testPromises = [AsyncGeneratorPrototype.next.call({}).then(function () {}, function (e) {
  if (!(e instanceof TypeError)) {}
}), AsyncGeneratorPrototype.next.call(function () {}).then(function () {}, function (e) {
  if (!(e instanceof TypeError)) {}
}), AsyncGeneratorPrototype.next.call(g).then(function () {}, function (e) {
  if (!(e instanceof TypeError)) {}
}), AsyncGeneratorPrototype.next.call(g.prototype).then(function () {}, function (e) {
  if (!(e instanceof TypeError)) {}
}), AsyncGeneratorPrototype.next.call(syncIterator).then(function () {}, function (e) {
  if (!(e instanceof TypeError)) {}
})];
Promise.all(testPromises).then(() => {}).then($DONE, $DONE);