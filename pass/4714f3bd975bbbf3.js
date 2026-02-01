var __reg = new RegExp("ABC");
__reg.toLocaleLowerCase = String.prototype.toLocaleLowerCase;
if (__reg.toLocaleLowerCase() !== "/abc/") {}