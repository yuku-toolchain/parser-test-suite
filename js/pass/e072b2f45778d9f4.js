var __FACTORY, __obj, obj;
__FACTORY = function () {
  this.prop = 1;
  obj = {};
  obj.prop = "A";
  obj.slot = this;
  return obj;
};
__obj = new __FACTORY();
if (obj.prop !== "A") {}
if (__obj.prop !== "A") {}
if (__obj.slot.prop !== 1) {}