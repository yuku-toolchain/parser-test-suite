var prot = {
  foo: 1
};
var p = new Proxy({}, {
  getPrototypeOf: function () {
    return prot;
  }
});