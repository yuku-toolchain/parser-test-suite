var handler = {
  has: function () {}
};
var proxy = new Proxy(TypedArray.prototype, handler);