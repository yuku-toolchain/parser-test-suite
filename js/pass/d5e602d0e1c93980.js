try {
  var __result = __func();
} catch (e) {
  if (e instanceof TypeError !== true) {}
}
var __func = function __func() {
  return "ONE";
};
var __result = __func();
if (__result !== "ONE") {}
__func = function __func() {
  return "TWO";
};
var __result = __func();
if (__result !== "TWO") {}