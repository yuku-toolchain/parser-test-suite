testWithBigIntTypedArrayConstructors(function (TA) {
  var sample = new TA(5);
  var calls = [];
  var obj = {
    length: 3
  };
  Object.defineProperty(obj, 0, {
    get: function () {
      calls.push(0);
      calls.push(sample.join());
      return 42n;
    }
  });
  Object.defineProperty(obj, 1, {
    get: function () {
      calls.push(1);
      calls.push(sample.join());
      return 43n;
    }
  });
  Object.defineProperty(obj, 2, {
    get: function () {
      calls.push(2);
      calls.push(sample.join());
      return 44n;
    }
  });
  Object.defineProperty(obj, 3, {
    get: function () {}
  });
  sample.set(obj, 1);
});