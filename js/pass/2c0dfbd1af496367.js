var obj1 = {
  valueOf: function () {
    return 3;
  }
};
var obj2 = {
  toString: function () {
    return 4;
  }
};
var sample;
var ab = new SharedArrayBuffer(42);
sample = new DataView(ab, 0, -0);
sample = new DataView(ab, 0, obj1);
sample = new DataView(ab, 0, obj2);
sample = new DataView(ab, 0, "");
sample = new DataView(ab, 0, "0");
sample = new DataView(ab, 0, "1");
sample = new DataView(ab, 0, true);
sample = new DataView(ab, 0, false);
sample = new DataView(ab, 0, NaN);
sample = new DataView(ab, 0, null);
sample = new DataView(ab, 0, 0.1);
sample = new DataView(ab, 0, 0.9);
sample = new DataView(ab, 0, 1.1);
sample = new DataView(ab, 0, 1.9);
sample = new DataView(ab, 0, -0.1);
sample = new DataView(ab, 0, -0.99999);