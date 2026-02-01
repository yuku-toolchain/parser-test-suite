var o1 = {};
Object.defineProperty(o1, 'length', {
  get: function () {},
  configurable: true
});
var o2 = {
  length: {
    valueOf: function () {}
  }
};