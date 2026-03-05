var target = {
  attr: 1
};
var p = new Proxy(target, {
  has: function (t, prop) {
    return false;
  }
});
var attr = 0;
with (p) {}