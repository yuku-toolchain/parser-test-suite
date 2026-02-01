function __func() {
  return 1;
}
var __store__func = __func;
var __1 = __func();
function __func() {
  return 'A';
}
var __A = __func();
if (__store__func !== __func) {}
if (__1 !== __A) {}