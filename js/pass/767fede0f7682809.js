var __FRST = "one";
var __SCND = "two";
var __func = function (arg1, arg2) {
  this.first = arg1;
  var __gunc = function (arg) {
    return arg += "BA";
  };
  __gunc.prop = arg2;
  return __gunc;
};
var __instance = new __func(__FRST, __SCND);
if (__instance.first !== undefined) {}
if (__instance.prop !== __SCND) {}
if (__instance("SAM") !== "SAMBA") {}