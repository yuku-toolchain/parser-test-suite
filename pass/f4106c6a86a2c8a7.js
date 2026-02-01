var g = {};
g[Symbol.iterator] = function () {
  return {
    next: function () {}
  };
};
var f = async function* ([x] = g) {};