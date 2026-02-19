var obj = {
  length: 0
};
var callCount = 0;
var result;
Object.defineProperty(obj, 'constructor', {
  get: function () {
    callCount += 1;
  }
});
result = Array.prototype.filter.call(obj, function () {});