testWithBigIntTypedArrayConstructors(function (TA) {
  var arr = [1n, 2n, 3n];
  var sample;
  var result;
  sample = new TA(3);
  sample.findLast(function (val, i) {
    sample[i] = arr[i];
  });
  sample = new TA(arr);
  result = sample.findLast(function (val, i) {
    if (i === 2) {
      sample[0] = 7n;
    }
    return val === 7n;
  });
  sample = new TA(arr);
  result = sample.findLast(function (val, i) {
    if (i === 2) {
      sample[0] = 7n;
    }
    return val === 1n;
  });
  sample = new TA(arr);
  result = sample.findLast(function (val, i) {
    if (i < 2) {
      sample[2] = 7n;
    }
    return val === 7n;
  });
  sample = new TA(arr);
  result = sample.findLast(function () {
    sample[2] = 7n;
    return true;
  });
});