var obj1 = {
  valueOf: function () {
    return 42;
  }
};
var obj2 = {
  toString: function () {
    return 42;
  }
};
var buffer;
buffer = new ArrayBuffer(obj1);
buffer = new ArrayBuffer(obj2);
buffer = new ArrayBuffer("");
buffer = new ArrayBuffer("0");
buffer = new ArrayBuffer("1");
buffer = new ArrayBuffer(true);
buffer = new ArrayBuffer(false);
buffer = new ArrayBuffer(NaN);
buffer = new ArrayBuffer(null);
buffer = new ArrayBuffer(undefined);
buffer = new ArrayBuffer(0.1);
buffer = new ArrayBuffer(0.9);
buffer = new ArrayBuffer(1.1);
buffer = new ArrayBuffer(1.9);
buffer = new ArrayBuffer(-0.1);
buffer = new ArrayBuffer(-0.99999);