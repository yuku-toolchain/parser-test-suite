var o = {};
Object.defineProperty(o, "bar", {
  get: function () {
    this.barGetter = true;
    return 42;
  },
  set: function (x) {
    this.barSetter = true;
  }
});