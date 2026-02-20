var GeneratorFunction = Object.getPrototypeOf(function* () {}).constructor;
var g = GeneratorFunction('yield 1;');
var iter = g();
var result;
result = iter.next();
result = iter.next();