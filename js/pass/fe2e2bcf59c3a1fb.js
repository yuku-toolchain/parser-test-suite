var toNumberOffset = 0;
var obj = {
  valueOf: function () {
    toNumberOffset += 1;
    return 0;
  }
};
var ab = new ArrayBuffer(42);
$DETACHBUFFER(ab);