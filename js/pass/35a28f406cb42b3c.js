var obj = {};
var str = new String("abc");
str.value = "String";
Object.defineProperties(obj, {
  property: str
});