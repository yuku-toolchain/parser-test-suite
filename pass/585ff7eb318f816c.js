testWithBigIntTypedArrayConstructors(function (TA) {
  var sample;
  sample = new TA([42n]);
  sample.fill(false);
  sample = new TA([42n]);
  sample.fill(true);
  sample = new TA([42n]);
  sample.fill("7");
  sample = new TA([42n]);
  sample.fill({
    toString: function () {
      return "1";
    },
    valueOf: function () {
      return 7n;
    }
  });
  sample = new TA([42n]);
  sample.fill({
    toString: function () {
      return "7";
    }
  });
});