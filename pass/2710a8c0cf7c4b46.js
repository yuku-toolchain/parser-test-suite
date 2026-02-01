var target = {
  attr: 1
};
var p = new Proxy(target, {
  getOwnPropertyDescriptor: function (t, prop) {
    return;
  }
});