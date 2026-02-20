var obj;
var __obj = new __FACTORY();
if (obj.prop !== "A") {}
if (__obj.prop !== "A") {}
if (__obj.slot.prop !== 1) {}
function __FACTORY() {
  this.prop = 1;
  obj = {};
  obj.prop = "A";
  obj.slot = this;
  return obj;
}