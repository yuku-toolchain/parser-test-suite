var target = {};
var handler = {
  set: function (t, prop, value, receiver) {
    return false;
  }
};
var p = new Proxy(target, handler);