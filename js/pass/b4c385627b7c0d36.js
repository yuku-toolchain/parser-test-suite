var target = {};
var handler = {
  set: function (t, prop, value, receiver) {
    return "";
  }
};
var p = new Proxy(target, handler);