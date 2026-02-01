var a = [];
var callCount = 0;
var cb = function () {
  callCount += 1;
};
a.constructor = {};
a.constructor[Symbol.species] = parseInt;