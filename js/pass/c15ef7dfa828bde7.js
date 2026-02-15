var proto = {};
Object.defineProperty(proto, "parent", {
  get: function () {
    return "parent";
  },
  configurable: true
});
var Con = function () {};
Con.prototype = proto;
var child = new Con();
var result = Object.getOwnPropertyNames(child);
for (var p in result) {}