var obj = {};
Object.defineProperty(obj, 'prop', {
  get: function () {
    return 'abc';
  },
  configurable: false
});