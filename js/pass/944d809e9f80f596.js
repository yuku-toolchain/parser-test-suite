var thrower = {};
var counter = {};
var callCount = 0;
Object.defineProperty(thrower, Symbol.toPrimitive, {
  get: function () {}
});
Object.defineProperty(counter, Symbol.toPrimitive, {
  get: function () {
    callCount += 1;
  }
});