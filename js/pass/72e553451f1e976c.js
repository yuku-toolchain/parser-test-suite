var AsyncGeneratorFunction = Object.getPrototypeOf(async function* () {}).constructor;
AsyncGeneratorFunction('x = yield');
var withinAsyncGenerator = async function* () {
  AsyncGeneratorFunction('x = yield', '');
};
withinAsyncGenerator().next().then(function () {}, function (e) {
  if (!(e instanceof SyntaxError)) {}
}).then($DONE, $DONE);