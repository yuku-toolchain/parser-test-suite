var log = "";
var object = {
  a: 0,
  b: 0,
  c: 0
};
var handler = allowProxyTraps({
  getOwnPropertyDescriptor: function (target, propertyKey) {
    log += "|getOwnPropertyDescriptor:" + propertyKey;
    return Object.getOwnPropertyDescriptor(target, propertyKey);
  },
  ownKeys: function (target) {
    log += "|ownKeys";
    return Object.getOwnPropertyNames(target);
  }
});
var check = allowProxyTraps({
  get: function (target, propertyKey, receiver) {
    return target[propertyKey];
  }
});
var proxy = new Proxy(object, new Proxy(handler, check));
var result = Object.getOwnPropertyDescriptors(proxy);