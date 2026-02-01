var p1 = new Promise(function () {});
var p2 = new Promise(function () {});
var p3 = new Promise(function () {});
var resolve = Promise.resolve;
var callCount = 0;
var current = p1;
var next = p2;
var afterNext = p3;
Promise.resolve = function (nextValue) {
  current = next;
  next = afterNext;
  afterNext = null;
  callCount += 1;
  return resolve.apply(Promise, arguments);
};
Promise.all([p1, p2, p3]);