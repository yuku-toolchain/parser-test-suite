var obj = {
  constructor: function () {}
};
obj.constructor[Symbol.species] = function () {
  return {
    exec: function () {}
  };
};