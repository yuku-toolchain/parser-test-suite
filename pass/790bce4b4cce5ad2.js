var AsyncGeneratorFunction = Object.getPrototypeOf(async function* () {}).constructor;
var g = AsyncGeneratorFunction();
var iter = g();
iter.next().then(function (result) {}).then($DONE, $DONE);