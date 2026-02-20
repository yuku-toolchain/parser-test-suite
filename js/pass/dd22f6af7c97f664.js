var arr = [0, 1, 2];
Array.prototype.protoProperty = "protoArray";
var result = Object.getOwnPropertyNames(arr);
for (var p in result) {}