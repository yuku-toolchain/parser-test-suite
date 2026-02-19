var gsab = new SharedArrayBuffer(0, {
  maxByteLength: 4
});
var ta = new Int32Array(gsab);
var index = {
  valueOf() {
    gsab.grow(4);
    return 0;
  }
};
var count = {
  valueOf() {}
};