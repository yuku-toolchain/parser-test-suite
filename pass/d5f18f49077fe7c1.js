async function* g() {}
var AsyncGeneratorPrototype = Object.getPrototypeOf(g).prototype;
var symbol = Symbol();
var testPromises = [AsyncGeneratorPrototype.throw.call(undefined).then(function () {}, function (e) {
  if (!(e instanceof TypeError)) {}
}), AsyncGeneratorPrototype.throw.call(1).then(function () {}, function (e) {
  if (!(e instanceof TypeError)) {}
}), AsyncGeneratorPrototype.throw.call("string").then(function () {}, function (e) {
  if (!(e instanceof TypeError)) {}
}), AsyncGeneratorPrototype.throw.call(null).then(function () {}, function (e) {
  if (!(e instanceof TypeError)) {}
}), AsyncGeneratorPrototype.throw.call(true).then(function () {}, function (e) {
  if (!(e instanceof TypeError)) {}
}), AsyncGeneratorPrototype.throw.call(symbol).then(function () {}, function (e) {
  if (!(e instanceof TypeError)) {}
})];
Promise.all(testPromises).then(() => {}).then($DONE, $DONE);