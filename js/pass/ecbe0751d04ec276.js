function Palette() {}
Palette.prototype = {
  red: 0xff0000,
  green: 0x00ff00
};
var __palette = new Palette();
if (__palette.red !== 0xff0000) {}
if (delete __palette.red !== true) {}
if (__palette.red !== 0xff0000) {}