testWithBigIntTypedArrayConstructors(function (TA) {
  var sourceItor = [1n, 2n];
  var sourceObj = {
    0: 0n,
    1: 0n,
    length: 2
  };
  var result;
  var custom = new TA(2);
  var ctor = function () {
    return custom;
  };
  result = TypedArray.from.call(ctor, sourceItor);
  result = TypedArray.from.call(ctor, sourceObj);
  custom = new TA(3);
  result = TypedArray.from.call(ctor, sourceItor);
  result = TypedArray.from.call(ctor, sourceObj);
});