var key = "a";
var ownKeys = [key];
var badProxyHandlers = allowProxyTraps({
  getOwnPropertyDescriptor: function () {},
  ownKeys: function () {
    return ownKeys;
  }
});
var proxy = new Proxy({}, badProxyHandlers);
var keys = Reflect.ownKeys(proxy);
var descriptor = Object.getOwnPropertyDescriptor(proxy, key);
var result = Object.getOwnPropertyDescriptors(proxy);