var regexp = /./;
var speciesConstructor = {};
regexp.constructor = speciesConstructor;
var callMatchAll = function () {
  regexp[Symbol.matchAll]('');
};
speciesConstructor[Symbol.species] = true;
speciesConstructor[Symbol.species] = 1;
speciesConstructor[Symbol.species] = Symbol();
speciesConstructor[Symbol.species] = true;