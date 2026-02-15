var obj = {};
var arg;
(function fun() {
  arg = arguments;
})();
arg.configurable = true;
Object.defineProperties(obj, {
  prop: arg
});
var result1 = obj.hasOwnProperty("prop");
delete obj.prop;
var result2 = obj.hasOwnProperty("prop");