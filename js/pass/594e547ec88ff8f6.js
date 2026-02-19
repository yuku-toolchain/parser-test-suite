var poisonedValue = Object.defineProperty({}, 'value', {
  get: function () {}
});
var g = {};
g[Symbol.iterator] = function () {
  return {
    next: function () {
      return poisonedValue;
    }
  };
};
var C = class {
  static async *method([x]) {}
};
var method = C.method;