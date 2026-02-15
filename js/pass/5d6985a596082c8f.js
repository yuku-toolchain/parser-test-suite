var GeneratorFunction = Object.getPrototypeOf(function* () {}).constructor;
GeneratorFunction('x = yield');
var withinGenerator = function* () {
  GeneratorFunction('x = yield', '');
};