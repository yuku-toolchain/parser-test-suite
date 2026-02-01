var obj = {};
var str = new String("abc");
str.writable = false;
Object.defineProperties(obj, {
  property: str
});