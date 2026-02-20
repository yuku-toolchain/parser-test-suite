var target = {};
var p = new Proxy(target, {
  getOwnPropertyDescriptor: {}
});