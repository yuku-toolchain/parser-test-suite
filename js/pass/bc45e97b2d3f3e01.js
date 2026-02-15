var g = {};
g[Symbol.iterator] = function () {
  return {
    next: function () {}
  };
};
var obj = {
  method([x]) {}
};