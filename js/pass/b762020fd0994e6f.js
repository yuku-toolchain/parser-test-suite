var __instance = Math;
__instance.exec = RegExp.prototype.exec;
try {
  __instance.exec("message to investigate");
} catch (e) {}