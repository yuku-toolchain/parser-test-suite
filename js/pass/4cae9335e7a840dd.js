var x = (function __func(arg) {
  return arg;
})(1);
if (x !== 1) {}
if (typeof __func !== 'undefined') {}