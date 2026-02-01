async function* g() {}
var AsyncGeneratorPrototype = Object.getPrototypeOf(g).prototype;
function* syncGenerator() {}
var syncIterator = syncGenerator();
var testPromises = [AsyncGeneratorPrototype.throw.call({}).then(function () {}, function (e) {
  if (!(e instanceof TypeError)) {}
}), AsyncGeneratorPrototype.throw.call(function () {}).then(function () {}, function (e) {
  if (!(e instanceof TypeError)) {}
}), AsyncGeneratorPrototype.throw.call(g).then(function () {}, function (e) {
  if (!(e instanceof TypeError)) {}
}), AsyncGeneratorPrototype.throw.call(g.prototype).then(function () {}, function (e) {
  if (!(e instanceof TypeError)) {}
}), AsyncGeneratorPrototype.throw.call(syncIterator).then(function () {}, function (e) {
  if (!(e instanceof TypeError)) {}
})];
Promise.all(testPromises).then(() => {}).then($DONE, $DONE);