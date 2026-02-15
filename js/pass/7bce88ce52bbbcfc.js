var t = {};
var trapped;
var p = new Proxy(t, {
  getOwnPropertyDescriptor: function (target, prop) {
    trapped = true;
    return;
  }
});