testWithBigIntTypedArrayConstructors(function (TA) {
  var arr = [10n, 20n, 30n];
  var sample;
  var result;
  sample = new TA(3);
  sample.findLastIndex(function (val, i) {
    sample[i] = arr[i];
  });
  sample = new TA(arr);
  result = sample.findLastIndex(function (val, i) {
    if (i === 2) {
      sample[0] = 7n;
    }
    return val === 7n;
  });
  sample = new TA(arr);
  result = sample.findLastIndex(function (val, i) {
    if (i === 2) {
      sample[0] = 7n;
    }
    return val === 10n;
  });
  sample = new TA(arr);
  result = sample.findLastIndex(function (val, i) {
    if (i < 2) {
      sample[2] = 7n;
    }
    return val === 7n;
  });
});