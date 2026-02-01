var s = new Set([1]);
var thisArg = {};
var counter = 0;
s.forEach(function () {
  counter++;
}, thisArg);