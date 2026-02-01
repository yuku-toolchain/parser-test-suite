var obj = {};
var attr = {};
Object.defineProperty(attr, "writable", {
  set: function () {}
});
Object.defineProperty(obj, "property", attr);