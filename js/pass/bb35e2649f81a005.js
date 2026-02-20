var AsyncGeneratorFunction = Object.getPrototypeOf(async function* () {}).constructor;
var g = AsyncGeneratorFunction('yield 1;');
var iter = g();
var result;
iter.next().then(function (result) {}).then(undefined, $DONE);
iter.next().then(function (result) {}).then($DONE, $DONE);