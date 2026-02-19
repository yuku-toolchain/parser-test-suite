var subject = {};
var originalGet = function () {};
var originalSet = function () {};
var newSet = function () {};
var desc, result;
Object.defineProperty(subject, 'stringAcsr', {
  get: originalGet,
  set: originalSet,
  enumerable: false,
  configurable: true
});
result = subject.__defineSetter__('stringAcsr', newSet);
desc = Object.getOwnPropertyDescriptor(subject, 'stringAcsr');