var array = [];
var maxLength = Math.pow(2, 32);
var cbCount = 0;
var setCount = 0;
var cb = function () {
  cbCount += 1;
};
var proxy = new Proxy(array, {
  get: function (_, name) {
    if (name === 'length') {
      return maxLength;
    }
    return array[name];
  },
  set: function () {
    setCount += 1;
    return true;
  }
});