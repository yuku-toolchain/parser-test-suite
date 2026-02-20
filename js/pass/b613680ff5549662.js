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
async function* f([x]) {}