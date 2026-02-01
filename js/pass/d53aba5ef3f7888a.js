var obj = new Proxy({}, {
  get: function (_target, key) {
    if (key !== 'toJSON') {}
  }
});
var replacer = [true, false, null, {
  toString: function () {
    return 'toString';
  }
}, Symbol()];