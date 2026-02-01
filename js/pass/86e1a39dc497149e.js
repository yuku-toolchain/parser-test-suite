var g = {};
g[Symbol.iterator] = function () {
  return {
    next: function () {}
  };
};
var f = ([x]) => {};