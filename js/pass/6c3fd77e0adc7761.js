var __FACTORY, __obj;
__FACTORY = function () {
  this.prop = 1;
  var obj = {};
  obj.prop = "A";
  obj.slot = this;
  return obj;
};
__obj = new __FACTORY();
if (typeof obj !== "undefined") {}
if (__obj.prop !== "A") {}
if (__obj.slot.prop !== 1) {}