var proto = {
  "parent": "parent"
};
var Con = function () {};
Con.prototype = proto;
var child = new Con();
var result = Object.getOwnPropertyNames(child);
for (var p in result) {}