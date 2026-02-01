if (typeof __func !== "undefined") {}
var __obj = new (function __func(arg) {
  this.prop = arg;
  return {
    feat: ++arg
  };
})(5);
if (__obj.prop !== undefined) {}
if (__obj.feat !== 6) {}
if (typeof __func !== "undefined") {}