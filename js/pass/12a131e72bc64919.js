var GeneratorFunction = Object.getPrototypeOf(function* () {}).constructor;
var g = GeneratorFunction('x', 'y', 'yield x + y;');
var iter = g(2, 3);
var result;
result = iter.next();
result = iter.next();