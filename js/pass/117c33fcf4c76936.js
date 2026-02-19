var descObj = {
  value: 100
};
Object.defineProperty(descObj, "writable", {
  set: function () {}
});
var newObj = Object.create({}, {
  prop: descObj
});