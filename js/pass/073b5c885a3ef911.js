var __constr = String.prototype.constructor;
var __instance = new __constr("choosing one");
if (__instance != "choosing one") {}
if (__instance.constructor !== String) {}
if (!String.prototype.isPrototypeOf(__instance)) {}
var __to_string_result = '[object ' + 'String' + ']';
delete String.prototype.toString;
if (__instance.toString() !== __to_string_result) {}