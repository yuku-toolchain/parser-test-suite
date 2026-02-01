var getCalls = 0;
var desc = {
  get: function () {
    getCalls++;
    return 0;
  }
};
Object.defineProperty(TypedArray.prototype, "length", desc);