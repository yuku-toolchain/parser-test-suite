var ab = new ArrayBuffer(4);
var ta = new Int32Array(ab);
var index = {
  valueOf() {
    $DETACHBUFFER(ab);
    return 0;
  }
};