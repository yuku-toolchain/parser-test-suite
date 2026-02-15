var array = [1, 2, 3];
var hints = [];
var length = {};
length[Symbol.toPrimitive] = function (hint) {
  hints.push(hint);
  Object.defineProperty(array, "length", {
    writable: false
  });
  return 0;
};
array = [1, 2, 3];
hints = [];