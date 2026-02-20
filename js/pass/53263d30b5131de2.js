var begin, end;
var o1 = {
  valueOf: function () {
    begin = true;
    return 0;
  }
};
var o2 = {
  valueOf: function () {
    end = true;
    return 2;
  }
};
testWithBigIntTypedArrayConstructors(function (TA) {
  var sample = new TA(2);
  begin = false;
  end = false;
  $DETACHBUFFER(sample.buffer);
});