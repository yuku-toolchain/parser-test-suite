var array = [];
var callCount = 0;
var CustomCtor = function () {};
var OObject = $262.createRealm().global.Object;
var speciesDesc = {
  get: function () {
    callCount += 1;
  }
};
var result;
array.constructor = OObject;
OObject[Symbol.species] = CustomCtor;
Object.defineProperty(Array, Symbol.species, speciesDesc);
result = array.slice();