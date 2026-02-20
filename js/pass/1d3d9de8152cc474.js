var __reg = new RegExp("ABC");
__reg.toLowerCase = String.prototype.toLowerCase;
if (__reg.toLowerCase() !== "/abc/") {}