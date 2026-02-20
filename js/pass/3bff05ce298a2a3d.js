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
buffer = new SharedArrayBuffer(obj1);
buffer = new SharedArrayBuffer(obj2);
buffer = new SharedArrayBuffer("");
buffer = new SharedArrayBuffer("0");
buffer = new SharedArrayBuffer("1");
buffer = new SharedArrayBuffer(true);
buffer = new SharedArrayBuffer(false);
buffer = new SharedArrayBuffer(NaN);
buffer = new SharedArrayBuffer(null);
buffer = new SharedArrayBuffer(undefined);
buffer = new SharedArrayBuffer(0.1);
buffer = new SharedArrayBuffer(0.9);
buffer = new SharedArrayBuffer(1.1);
buffer = new SharedArrayBuffer(1.9);
buffer = new SharedArrayBuffer(-0.1);
buffer = new SharedArrayBuffer(-0.99999);