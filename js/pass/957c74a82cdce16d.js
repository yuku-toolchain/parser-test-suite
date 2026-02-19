function __func(__arg) {
  delete arguments[0];
  if (arguments[0] !== undefined) {}
  return __arg;
}
if (__func(1) !== 1) {}