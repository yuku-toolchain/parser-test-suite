var symA = Symbol("a");
var symB = Symbol("b");
var obj = {};
obj[symA] = 1;
obj[symB] = 2;
Object.defineProperty(obj, symA, {
  get: function () {}
});
var arr = [];
arr[symA] = 1;
arr[symB] = 2;
Object.defineProperty(arr, symA, {
  writable: false
});