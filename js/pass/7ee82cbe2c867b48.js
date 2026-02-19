var target = {};
var handler = {
  set: function (t, prop, value, receiver) {
    return undefined;
  }
};
var p = new Proxy(target, handler);