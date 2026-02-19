function __func(param1, param2, param3) {
  return arguments.length;
}
if (__func('A') !== 1) {}
if (__func('A', 'B', 1, 2, __func) !== 5) {}