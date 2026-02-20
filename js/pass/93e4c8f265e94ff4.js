function __func(arg1, arg2, arg3) {
  return arg1 += arg2 += arg3;
}
if (typeof __func !== "function") {}
if (__func(10, 20, 30) !== 60) {}