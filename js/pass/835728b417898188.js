var result = false;
var argObj = (function () {
  return arguments;
})();
Object.defineProperty(argObj, "prop", {
  get: function () {
    result = '[object Arguments]' === Object.prototype.toString.call(this);
    return {};
  },
  enumerable: true
});
var newObj = Object.create({}, argObj);