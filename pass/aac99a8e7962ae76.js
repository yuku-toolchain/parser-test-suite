var proto = {};
Object.defineProperty(proto, "Father", {
  value: 10,
  configurable: true
});
var Con = function () {};
Con.prototype = proto;
var child = new Con();
Object.freeze(child);
var beforeDeleted = proto.hasOwnProperty("Father");
delete proto.Father;
var afterDeleted = proto.hasOwnProperty("Father");