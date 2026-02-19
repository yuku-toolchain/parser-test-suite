var OProxy = $262.createRealm().global.Proxy;
var p = new OProxy({}, {
  getOwnPropertyDescriptor: function () {
    return null;
  }
});