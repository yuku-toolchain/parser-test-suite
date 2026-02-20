var buffer = new ArrayBuffer(16);
var obj1 = {
  valueOf: function () {
    return 8;
  }
};
var obj2 = {
  toString: function () {
    return 8;
  }
};
var items = [[-0, 0, "-0"], [obj1, 8, "object's valueOf"], [obj2, 8, "object's toString"], ["", 0, "the Empty string"], ["0", 0, "string '0'"], ["8", 8, "string '8'"], [false, 0, "false"], [NaN, 0, "NaN"], [null, 0, "null"], [undefined, 0, "undefined"], [0.1, 0, "0.1"], [0.9, 0, "0.9"], [8.1, 8, "8.1"], [8.9, 8, "8.9"], [-0.1, 0, "-0.1"], [-0.99999, 0, "-0.99999"]];