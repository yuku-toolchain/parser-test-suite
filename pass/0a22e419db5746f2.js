testWithBigIntTypedArrayConstructors(function (TA) {
  var sample1 = new TA([42n, 42n, 42n]);
  var result1 = Reflect.ownKeys(sample1);
  var sample2 = new TA(4);
  var result2 = Reflect.ownKeys(sample2);
  var sample3 = new TA(4).subarray(2);
  var result3 = Reflect.ownKeys(sample3);
  var sample4 = new TA();
  var result4 = Reflect.ownKeys(sample4);
});