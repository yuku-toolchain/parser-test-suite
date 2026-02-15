var target = {
  attr: "foo"
};
var r = Proxy.revocable(target, {
  get: function (t, prop) {
    return t[prop] + "!";
  }
});