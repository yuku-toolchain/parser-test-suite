var getCalls = 0;
var desc = {
  get: function getLen() {
    getCalls++;
    return 42;
  }
};
Object.defineProperty(TypedArray.prototype, "length", desc);