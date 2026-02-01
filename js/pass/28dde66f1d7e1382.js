if (typeof __func !== "undefined") {}
var __obj = new (function __func(arg) {
  this.prop = arg;
})(5);
if (__obj.prop !== 5) {}
if (typeof __func !== "undefined") {}