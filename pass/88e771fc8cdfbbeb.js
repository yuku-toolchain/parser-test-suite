var target = {
  attr: 1
};
var p = new Proxy(target, {
  has: function (t, prop) {
    return false;
  }
});