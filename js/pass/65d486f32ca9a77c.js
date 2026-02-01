try {
  var __result = __func();
} catch (e) {}
if (__result !== "SECOND") {}
function __func() {
  return "FIRST";
}
__result = __func();
if (__result !== "SECOND") {}
function __func() {
  return "SECOND";
}