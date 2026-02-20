var ab1 = new ArrayBuffer(0, {
  maxByteLength: 0
});
$DETACHBUFFER(ab1);
var ab2 = new ArrayBuffer(0, {
  maxByteLength: 23
});
$DETACHBUFFER(ab2);
var ab3 = new ArrayBuffer(42, {
  maxByteLength: 42
});
$DETACHBUFFER(ab3);