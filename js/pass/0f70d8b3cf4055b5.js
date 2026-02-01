var obj = new String("xyz");
obj[-20] = -20;
obj[20] = 20;
Object.defineProperty(obj, "prop", {
  value: 1003,
  enumerable: false,
  configurable: true
});
var arr = Object.keys(obj);
for (var i = 0; i < arr.length; i++) {}