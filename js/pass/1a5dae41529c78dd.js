var a = [];
var callCount = 0;
var cb = function () {
  callCount += 1;
};
Object.defineProperty(a, 'constructor', {
  get: function () {}
});