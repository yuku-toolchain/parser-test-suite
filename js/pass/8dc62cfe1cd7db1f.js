var GeneratorFunction = Object.getPrototypeOf(function* () {}).constructor;
var other = $262.createRealm().global;
var OtherGeneratorFunction = Object.getPrototypeOf(other.eval('(0, function* () {})')).constructor;
var C = new other.Function();
C.prototype = null;
var o = Reflect.construct(GeneratorFunction, [], C);