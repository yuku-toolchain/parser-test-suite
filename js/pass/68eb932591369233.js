var AsyncGeneratorFunction = Object.getPrototypeOf(async function* () {}).constructor;
AsyncGeneratorFunction('x = await 42');
var withinAsyncGenerator = async function* () {
  AsyncGeneratorFunction('x = await 42', '');
};
withinAsyncGenerator().next().then(function () {}, function (e) {
  if (!(e instanceof SyntaxError)) {}
}).then($DONE, $DONE);