var rab = new ArrayBuffer(4, {
  maxByteLength: 4
});
var ta = new Int32Array(rab);
var index = {
  valueOf() {
    rab.resize(0);
    return 0;
  }
};