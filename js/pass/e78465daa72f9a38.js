const i32a = new Int32Array(new SharedArrayBuffer(Int32Array.BYTES_PER_ELEMENT * 4));
const valueOf = {
  valueOf: function () {
    return true;
  }
};
const toPrimitive = {
  [Symbol.toPrimitive]: function () {
    return true;
  }
};