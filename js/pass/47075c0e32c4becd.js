var callCount = 0;
var thisValue, firstArg, argLength, getCapabilitiesExecutor;
var executor = function () {};
var p1 = new Promise(function () {});
var SpeciesConstructor = class extends Promise {
  constructor(a) {
    super(a);
    callCount += 1;
    thisValue = this;
    getCapabilitiesExecutor = a;
    argLength = arguments.length;
  }
};
var p2;
p1.constructor = function () {};
p1.constructor[Symbol.species] = SpeciesConstructor;
p2 = p1.then();