var g = {};
g[Symbol.iterator] = function () {
  return {
    next: function () {}
  };
};
function* f([x]) {}