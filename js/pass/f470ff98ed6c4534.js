testWithBigIntTypedArrayConstructors(function (TA) {
  var arr = [1n, 2n, 3n];
  var sample;
  var result;
  sample = new TA(3);
  sample.find(function (val, i) {
    sample[i] = arr[i];
  });
  sample = new TA(arr);
  result = sample.find(function (val, i) {
    if (i === 0) {
      sample[2] = 7n;
    }
    return val === 7n;
  });
  sample = new TA(arr);
  result = sample.find(function (val, i) {
    if (i === 0) {
      sample[2] = 7n;
    }
    return val === 3n;
  });
  sample = new TA(arr);
  result = sample.find(function (val, i) {
    if (i > 0) {
      sample[0] = 7n;
    }
    return val === 7n;
  });
  sample = new TA(arr);
  result = sample.find(function () {
    sample[0] = 7n;
    return true;
  });
});