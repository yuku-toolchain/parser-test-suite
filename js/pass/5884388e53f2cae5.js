async function* g() {}
var AsyncGeneratorPrototype = Object.getPrototypeOf(g).prototype;
var symbol = Symbol();
var testPromises = [AsyncGeneratorPrototype.next.call(undefined).then(function () {}, function (e) {
  if (!(e instanceof TypeError)) {}
}), AsyncGeneratorPrototype.next.call(1).then(function () {}, function (e) {
  if (!(e instanceof TypeError)) {}
}), AsyncGeneratorPrototype.next.call("string").then(function () {}, function (e) {
  if (!(e instanceof TypeError)) {}
}), AsyncGeneratorPrototype.next.call(null).then(function () {}, function (e) {
  if (!(e instanceof TypeError)) {}
}), AsyncGeneratorPrototype.next.call(true).then(function () {}, function (e) {
  if (!(e instanceof TypeError)) {}
}), AsyncGeneratorPrototype.next.call(symbol).then(function () {}, function (e) {
  if (!(e instanceof TypeError)) {}
})];
Promise.all(testPromises).then(() => {}).then($DONE, $DONE);