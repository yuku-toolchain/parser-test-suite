var x = (function __func(arg) {
  return arg + arguments[1];
})(1, "1");
if (x !== "11") {}
if (typeof __func !== 'undefined') {}