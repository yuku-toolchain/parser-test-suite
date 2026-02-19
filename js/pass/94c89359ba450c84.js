testWithBigIntTypedArrayConstructors(function (TA) {
  var lastValue = false;
  var obj1 = {
    valueOf() {
      lastValue = "obj1";
      return 42n;
    }
  };
  var obj2 = {
    valueOf() {
      lastValue = "obj2";
    }
  };
});