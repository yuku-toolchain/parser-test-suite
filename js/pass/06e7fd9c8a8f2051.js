var handler = Object.defineProperty({}, "setPrototypeOf", {
  get: function () {}
});
var proxy = new Proxy({}, handler);