function __func() {
  return arguments.length;
}
if (__func('A') !== 1) {}
if (__func('A', 'B', 1, 2, __func) !== 5) {}
if (__func() !== 0) {}