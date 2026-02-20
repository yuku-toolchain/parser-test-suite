var proto = {};
var target = Object.setPrototypeOf({}, proto);
Object.preventExtensions(target);
var proxy;
proxy = new Proxy(target, {
  setPrototypeOf: function () {
    return true;
  }
});
var outro = {};
proxy = new Proxy(outro, {
  setPrototypeOf: function (t, p) {
    Object.setPrototypeOf(t, p);
    Object.preventExtensions(t);
    return true;
  }
});