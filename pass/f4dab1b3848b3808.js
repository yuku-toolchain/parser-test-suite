function __func() {
  delete arguments;
  return arguments;
}
if (typeof __func("A", "B", 1, 2) !== "object") {}