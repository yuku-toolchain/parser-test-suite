var AsyncGeneratorFunction = Object.getPrototypeOf(async function* () {}).constructor;
var g = AsyncGeneratorFunction('x', 'y', 'yield x + y;');
var iter = g(2, 3);
iter.next().then(function (result) {}).then(undefined, $DONE);
iter.next().then(function (result) {}).then($DONE, $DONE);