var buffer = new ArrayBuffer(8);
var sample = new DataView(buffer, 0);
var v = {
  valueOf: function () {}
};
$DETACHBUFFER(buffer);