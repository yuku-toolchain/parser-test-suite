var GeneratorFunction = Object.getPrototypeOf(function* () {}).constructor;
var g = new GeneratorFunction();
var iter = g();
var result = iter.next();