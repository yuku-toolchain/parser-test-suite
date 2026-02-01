var target = {};
var handler = {
  set: function (t, prop, value, receiver) {
    return null;
  }
};
var p = new Proxy(target, handler);