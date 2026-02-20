var obj = {};
var result = false;
try {
  Object.defineProperty(this, "prop", {
    get: function () {
      result = this === global;
      return {};
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperties(obj, this);
} catch (e) {
  if (!(e instanceof TypeError)) {}
  result = true;
} finally {
  delete this.prop;
}