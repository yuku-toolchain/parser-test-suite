var obj = {};
var str = new String("abc");
str.get = function () {
  return "string Object";
};
Object.defineProperties(obj, {
  property: str
});