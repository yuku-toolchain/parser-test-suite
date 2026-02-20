var str = new String("abc");
String.prototype.protoProperty = "protoString";
var result = Object.getOwnPropertyNames(str);
for (var p in result) {}