function __func(__arg) {
  __arg = 2;
  delete arguments[0];
  if (arguments[0] !== undefined) {}
  arguments[0] = "A";
  if (arguments[0] !== "A") {}
  return __arg;
}
if (__func(1) !== 2) {}