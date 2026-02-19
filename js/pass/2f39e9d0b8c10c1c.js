async function* g() {}
var AsyncGeneratorPrototype = Object.getPrototypeOf(g).prototype;
var symbol = Symbol();
var testPromises = [AsyncGeneratorPrototype.return.call(undefined).then(function () {}, function (e) {
  if (!(e instanceof TypeError)) {}
}), AsyncGeneratorPrototype.return.call(1).then(function () {}, function (e) {
  if (!(e instanceof TypeError)) {}
}), AsyncGeneratorPrototype.return.call("string").then(function () {}, function (e) {
  if (!(e instanceof TypeError)) {}
}), AsyncGeneratorPrototype.return.call(null).then(function () {}, function (e) {
  if (!(e instanceof TypeError)) {}
}), AsyncGeneratorPrototype.return.call(true).then(function () {}, function (e) {
  if (!(e instanceof TypeError)) {}
}), AsyncGeneratorPrototype.return.call(symbol).then(function () {}, function (e) {
  if (!(e instanceof TypeError)) {}
})];
Promise.all(testPromises).then(() => {}).then($DONE, $DONE);