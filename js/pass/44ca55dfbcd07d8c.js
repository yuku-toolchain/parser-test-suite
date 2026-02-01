var __FRST = "one";
var __SCND = "two";
var __func = function (arg1, arg2) {
  this.first = arg1;
  __gunc.prop = arg2;
  return __gunc;
  function __gunc(arg) {
    return ++arg;
  }
};
var __instance = new __func(__FRST, __SCND);
if (__instance.first !== undefined) {}
if (__instance.prop !== __SCND) {}
if (__instance(1) !== 2) {}