var array = [];
var maxLength = Math.pow(2, 32);
var callCount = 0;
var proxy = new Proxy(array, {
  get: function (_, name) {
    if (name === 'length') {
      return maxLength;
    }
    return array[name];
  },
  set: function () {
    callCount += 1;
    return true;
  }
});