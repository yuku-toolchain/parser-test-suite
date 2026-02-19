var thrower = {};
var counter = {};
var log;
Object.defineProperty(thrower, Symbol.toPrimitive, {
  get: function () {
    log += 'accessThrower';
    return function () {};
  }
});
Object.defineProperty(counter, Symbol.toPrimitive, {
  get: function () {
    log += 'accessCounter';
    return function () {
      log += 'callCounter';
    };
  }
});
log = '';
log = '';