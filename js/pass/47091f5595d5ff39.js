var BadCtor = function () {};
var originalSpecies = Object.getOwnPropertyDescriptor(Promise, Symbol.species);
Object.defineProperty(Promise, Symbol.species, {
  value: BadCtor
});
try {
  var p = new Promise(function (resolve) {
    resolve();
  });
} finally {
  Object.defineProperty(Promise, Symbol.species, originalSpecies);
}