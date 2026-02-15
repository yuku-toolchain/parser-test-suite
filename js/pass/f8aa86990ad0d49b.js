if (typeof f !== 'undefined') {}
if ((function f(arg) {
  if (arg === 0) return 1; else return f(arg - 1) * arg;
})(3) !== 6) {}