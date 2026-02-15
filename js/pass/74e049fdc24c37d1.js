var obj = {};
var arg;
(function fun() {
  arg = arguments;
})();
Object.defineProperty(arg, "prop", {
  value: {
    value: 17
  },
  enumerable: true
});
Object.defineProperties(obj, arg);