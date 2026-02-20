var g = {};
g[Symbol.iterator] = function () {
  return {
    next: function () {}
  };
};
async function* f([x] = g) {}