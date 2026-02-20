Object.defineProperty(Object.prototype, 'property', {
  get: function () {},
  set: function () {}
});
var result = Object.fromEntries([['property', 'value']]);