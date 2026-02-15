var proto = TypedArray.prototype;
var throwDesc = {
  get: function () {}
};
Object.defineProperty(proto, "0", throwDesc);
Object.defineProperty(proto, "1", throwDesc);