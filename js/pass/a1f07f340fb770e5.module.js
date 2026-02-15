Object.defineProperty(Boolean.prototype, "toString", {
  get: function () {
    var v = typeof this;
    return function () {
      return v;
    };
  }
});