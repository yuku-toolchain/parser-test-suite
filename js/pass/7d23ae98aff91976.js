var __count = 0;
this["beep"] = function () {
  __count++;
};
beep();
if (__count !== 1) {}
this["beep"]();
if (__count !== 2) {}