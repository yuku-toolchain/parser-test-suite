testWithBigIntTypedArrayConstructors(function (TA) {
  var sample;
  sample = new TA([1n, 2n]);
  sample.set([42n], "");
  sample = new TA([1n, 2n]);
  sample.set([42n], "0");
  sample = new TA([1n, 2n]);
  sample.set([42n], false);
  sample = new TA([1n, 2n]);
  sample.set([42n], 0.1);
  sample = new TA([1n, 2n]);
  sample.set([42n], 0.9);
  sample = new TA([1n, 2n]);
  sample.set([42n], -0.5);
  sample = new TA([1n, 2n]);
  sample.set([42n], 1.1);
  sample = new TA([1n, 2n]);
  sample.set([42n], NaN);
  sample = new TA([1n, 2n]);
  sample.set([42n], null);
  sample = new TA([1n, 2n]);
  sample.set([42n], undefined);
  sample = new TA([1n, 2n]);
  sample.set([42n], {});
  sample = new TA([1n, 2n]);
  sample.set([42n], []);
  sample = new TA([1n, 2n]);
  sample.set([42n], [0]);
  sample = new TA([1n, 2n]);
  sample.set([42n], true);
  sample = new TA([1n, 2n]);
  sample.set([42n], "1");
  sample = new TA([1n, 2n]);
  sample.set([42n], [1]);
  sample = new TA([1n, 2n]);
  sample.set([42n], {
    valueOf: function () {
      return 1;
    }
  });
  sample = new TA([1n, 2n]);
  sample.set([42n], {
    toString: function () {
      return 1;
    }
  });
});