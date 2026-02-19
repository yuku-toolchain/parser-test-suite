var p1 = new Promise(function () {});
var p2 = new Promise(function () {});
var p3 = new Promise(function () {});
var callCount = 0;
var currentThis = p1;
var nextThis = p2;
var afterNextThis = p3;
p1.then = p2.then = p3.then = function (a, b) {
  currentThis = nextThis;
  nextThis = afterNextThis;
  afterNextThis = null;
  callCount += 1;
};
Promise.race([p1, p2, p3]);