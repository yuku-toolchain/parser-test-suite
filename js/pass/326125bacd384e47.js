function __func(arg) {
  return ++arg;
}
if (typeof __func !== "function") {}
if (__func(1) !== 2) {}