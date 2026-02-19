var target = {};
var handler = {
  set: function (t, prop, value, receiver) {
    return 0;
  }
};
var p = new Proxy(target, handler);