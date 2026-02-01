var other = $262.createRealm().global;
var p = new other.Proxy({}, {
  ownKeys: function () {
    return undefined;
  }
});