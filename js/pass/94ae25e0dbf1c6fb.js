var ab1 = new ArrayBuffer(1);
$DETACHBUFFER(ab1);
var ab2 = new ArrayBuffer(1, {
  maxByteLength: 1
});
$DETACHBUFFER(ab2);