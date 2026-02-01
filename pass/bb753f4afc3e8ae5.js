var trapResult = [Symbol(), "length", "foo", "0"];
var target = new Proxy([], {
  ownKeys: function (_target) {
    return trapResult;
  }
});
var proxy = new Proxy(target, {
  ownKeys: undefined
});