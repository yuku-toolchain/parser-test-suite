testWithBigIntTypedArrayConstructors(function (TA) {
  var arr = [10n, 20n, 30n];
  var sample;
  var result;
  sample = new TA(3);
  sample.findIndex(function (val, i) {
    sample[i] = arr[i];
  });
  sample = new TA(arr);
  result = sample.findIndex(function (val, i) {
    if (i === 0) {
      sample[2] = 7n;
    }
    return val === 7n;
  });
  sample = new TA(arr);
  result = sample.findIndex(function (val, i) {
    if (i === 0) {
      sample[2] = 7n;
    }
    return val === 30n;
  });
  sample = new TA(arr);
  result = sample.findIndex(function (val, i) {
    if (i > 0) {
      sample[0] = 7n;
    }
    return val === 7n;
  });
});