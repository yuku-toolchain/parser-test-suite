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
var ab = new ArrayBuffer(42);
sample = new DataView(ab, -0);
sample = new DataView(ab, obj1);
sample = new DataView(ab, obj2);
sample = new DataView(ab, "");
sample = new DataView(ab, "0");
sample = new DataView(ab, "1");
sample = new DataView(ab, true);
sample = new DataView(ab, false);
sample = new DataView(ab, NaN);
sample = new DataView(ab, null);
sample = new DataView(ab, undefined);
sample = new DataView(ab, 0.1);
sample = new DataView(ab, 0.9);
sample = new DataView(ab, 1.1);
sample = new DataView(ab, 1.9);
sample = new DataView(ab, -0.1);
sample = new DataView(ab, -0.99999);