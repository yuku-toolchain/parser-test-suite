var s = new Set([1]);
var counter = 0;
var globalObject = this;
s.forEach(function () {
  counter++;
});