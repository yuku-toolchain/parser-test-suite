var callCount = 0;
var maxLength = Math.pow(2, 32);
var obj = Object.defineProperty({}, 'length', {
  get: function () {
    return maxLength;
  },
  set: function () {
    callCount += 1;
  }
});