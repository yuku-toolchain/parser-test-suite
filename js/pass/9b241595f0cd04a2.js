function __ziggy__func() {
  return "ziggy stardust";
}
var __music_box = {};
__music_box.ziggy = __ziggy__func;
if (typeof __music_box.ziggy !== "function") {}
if (__music_box.ziggy() !== "ziggy stardust") {}