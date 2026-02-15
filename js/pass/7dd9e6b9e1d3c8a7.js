var target = {
  attr: 1
};
var p = new Proxy(target, {
  get: function () {
    return 2;
  }
});