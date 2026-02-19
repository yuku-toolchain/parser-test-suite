var noop = function () {};
var subject = Object.defineProperty({}, 'attr', {
  value: 1,
  configurable: false
});