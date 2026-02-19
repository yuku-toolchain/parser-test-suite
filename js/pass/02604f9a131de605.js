testWithBigIntTypedArrayConstructors(function (TA) {
  var sample;
  var src = new TA([42n]);
  sample = new TA([1n, 2n]);
  sample.set(src, "");
  sample = new TA([1n, 2n]);
  sample.set(src, "0");
  sample = new TA([1n, 2n]);
  sample.set(src, false);
  sample = new TA([1n, 2n]);
  sample.set(src, 0.1);
  sample = new TA([1n, 2n]);
  sample.set(src, 0.9);
  sample = new TA([1n, 2n]);
  sample.set(src, -0.5);
  sample = new TA([1n, 2n]);
  sample.set(src, 1.1);
  sample = new TA([1n, 2n]);
  sample.set(src, NaN);
  sample = new TA([1n, 2n]);
  sample.set(src, null);
  sample = new TA([1n, 2n]);
  sample.set(src, undefined);
  sample = new TA([1n, 2n]);
  sample.set(src, {});
  sample = new TA([1n, 2n]);
  sample.set(src, []);
  sample = new TA([1n, 2n]);
  sample.set(src, [0]);
  sample = new TA([1n, 2n]);
  sample.set(src, true);
  sample = new TA([1n, 2n]);
  sample.set(src, "1");
  sample = new TA([1n, 2n]);
  sample.set(src, [1]);
  sample = new TA([1n, 2n]);
  sample.set(src, {
    valueOf: function () {
      return 1;
    }
  });
  sample = new TA([1n, 2n]);
  sample.set(src, {
    toString: function () {
      return 1;
    }
  });
});