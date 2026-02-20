function __func(__arg) {
  __arg = 2;
  delete arguments[0];
  if (arguments[0] !== undefined) {}
  return __arg;
}
if (__func(1) !== 2) {}