var abruptLength = new Proxy([], {
  get: function (_target, key) {
    if (key === 'length') {}
  }
});
var abruptToPrimitive = {
  valueOf: function () {}
};
var abruptToLength = new Proxy([], {
  get: function (_target, key) {
    if (key === 'length') {
      return abruptToPrimitive;
    }
  }
});
var abruptIndex = new Array(1);
Object.defineProperty(abruptIndex, '0', {
  get: function () {}
});