var proto = TypedArray.prototype;
var throwDesc = {
  get: function () {}
};
Object.defineProperty(proto, "-1", throwDesc);
Object.defineProperty(proto, "2", throwDesc);
Object.defineProperty(proto, "3", throwDesc);