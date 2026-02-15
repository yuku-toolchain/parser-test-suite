var iter = {};
iter[Symbol.iterator] = function () {};
var obj = {
  async *method([x] = iter) {}
};