var subject = {};
var originalGet = function () {};
var originalSet = function () {};
var newGet = function () {};
var desc, result;
Object.defineProperty(subject, 'stringAcsr', {
  get: originalGet,
  set: originalSet,
  enumerable: false,
  configurable: true
});
result = subject.__defineGetter__('stringAcsr', newGet);
desc = Object.getOwnPropertyDescriptor(subject, 'stringAcsr');