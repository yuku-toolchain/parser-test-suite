var getCalls = 0;
var desc = {
  get: function getLen() {
    getCalls++;
    return 0;
  }
};
Object.defineProperty(TypedArray.prototype, "byteOffset", desc);