var calls = [];
var proto = {};
var target = new Proxy(Object.create(proto), {
  isExtensible: function () {
    calls.push("target.[[IsExtensible]]");
    return false;
  },
  getPrototypeOf: function () {
    calls.push("target.[[GetPrototypeOf]]");
    return proto;
  }
});
Object.preventExtensions(target);
var proxy = new Proxy(target, {
  setPrototypeOf: function () {
    calls.push("proxy.[[setPrototypeOf]]");
    return true;
  }
});