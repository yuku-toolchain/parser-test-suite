var ranCatch = false;
try {
  throw [];
} catch ([fn = function () {}, xFn = function x() {}]) {
  ranCatch = true;
}