var proto = {};
Object.defineProperty(proto, "Father", {
  get: function () {
    return 10;
  },
  configurable: true
});
var Con = function () {};
Con.prototype = proto;
var child = new Con();
Object.freeze(child);
var beforeDeleted = proto.hasOwnProperty("Father");
delete proto.Father;
var afterDeleted = proto.hasOwnProperty("Father");