var str = new String("abc");
Object.defineProperty(String.prototype, "protoProperty", {
  get: function () {
    return "protoString";
  },
  configurable: true
});
var result = Object.getOwnPropertyNames(str);
for (var p in result) {}