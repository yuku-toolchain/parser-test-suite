var __obj = new __FACTORY();
if (typeof obj !== "undefined") {}
if (__obj.prop !== "A") {}
if (__obj.slot.prop !== 1) {}
function __FACTORY() {
  this.prop = 1;
  var obj = {};
  obj.prop = "A";
  obj.slot = this;
  return obj;
}