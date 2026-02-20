testWithBigIntTypedArrayConstructors(function (TA) {
  var src = [42n, 43n];
  var srcObj = {
    length: 2,
    '0': 7n,
    '1': 17n
  };
  var sample, result;
  sample = new TA([1n, 2n, 3n, 4n]);
  result = sample.set(src, 0);
  sample = new TA([1n, 2n, 3n, 4n]);
  result = sample.set(src, 1);
  sample = new TA([1n, 2n, 3n, 4n]);
  result = sample.set(src, 2);
  sample = new TA([1n, 2n, 3n, 4n]);
  result = sample.set(srcObj, 0);
  sample = new TA([1n, 2n, 3n, 4n]);
  result = sample.set(srcObj, 1);
  sample = new TA([1n, 2n, 3n, 4n]);
  result = sample.set(srcObj, 2);
});