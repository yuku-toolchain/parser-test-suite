function __func() {
  return "zig-zig-sputnik";
}
if (typeof __func !== "function") {}
if (__func() !== "zig-zig-sputnik") {}