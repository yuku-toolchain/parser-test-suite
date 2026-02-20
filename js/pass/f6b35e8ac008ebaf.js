testWithBigIntTypedArrayConstructors(function (TA) {
  var sample = new TA([1n, 0n, 2n, 3n, 42n, 127n]);
  var result;
  result = sample.join(",");
  result = sample.join(undefined);
  result = sample.join(null);
  result = sample.join(",,");
  result = sample.join(0);
  result = sample.join("");
  result = sample.join(" a b c ");
  result = sample.join({});
  result = sample.join(true);
  result = sample.join({
    toString: function () {
      return "foo";
    }
  });
  result = sample.join({
    toString: undefined,
    valueOf: function () {
      return "bar";
    }
  });
  result = sample.join(false);
  result = sample.join(-1);
  result = sample.join(-0);
});