var callCount = 0;
var obj = {
  constructor: function () {}
};
obj.constructor[Symbol.species] = function () {
  return {
    set lastIndex(_) {},
    exec: function () {
      callCount += 1;
    }
  };
};