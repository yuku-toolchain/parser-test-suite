var OProxy = $262.createRealm().global.Proxy;
var desc;
var p = new OProxy({}, {
  defineProperty: function (_, __, _desc) {
    desc = _desc;
    return desc;
  }
});
p.a = 0;