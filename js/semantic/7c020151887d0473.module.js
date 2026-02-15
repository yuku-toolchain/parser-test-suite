function __func() {
  return delete arguments;
}
if (__func("A", "B", 1, 2)) {}