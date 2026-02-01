var calls;
var obj = {};
var p = new Proxy(obj, {
  get: function (_, key) {
    calls.push(key);
    if (key === "length") {
      return 4;
    }
    return key * 10;
  }
});
calls = [];
calls = [];