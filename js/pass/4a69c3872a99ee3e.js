var stringTarget = new Proxy(new String("str"), {});
var stringProxy = new Proxy(stringTarget, {
  get: null
});
var sym = Symbol();
var target = new Proxy({}, {
  get: function (_target, key) {
    switch (key) {
      case sym:
        return 1;
      case "10":
        return 2;
      case "foo":
        return 3;
    }
  }
});
var proxy = new Proxy(target, {
  get: null
});