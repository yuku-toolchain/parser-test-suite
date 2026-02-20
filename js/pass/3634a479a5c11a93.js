async function* g() {}
var AsyncGeneratorPrototype = Object.getPrototypeOf(g).prototype;
function* syncGenerator() {}
var syncIterator = syncGenerator();
var testPromises = [AsyncGeneratorPrototype.return.call({}).then(function () {}, function (e) {
  if (!(e instanceof TypeError)) {}
}), AsyncGeneratorPrototype.return.call(function () {}).then(function () {}, function (e) {
  if (!(e instanceof TypeError)) {}
}), AsyncGeneratorPrototype.return.call(g).then(function () {}, function (e) {
  if (!(e instanceof TypeError)) {}
}), AsyncGeneratorPrototype.return.call(g.prototype).then(function () {}, function (e) {
  if (!(e instanceof TypeError)) {}
}), AsyncGeneratorPrototype.return.call(syncIterator).then(function () {}, function (e) {
  if (!(e instanceof TypeError)) {}
})];
Promise.all(testPromises).then(() => {}).then($DONE, $DONE);