function f(o) {
  function innerf(o, x) {
    with (o) {
      return x;
    }
  }
  return innerf(o, 42);
}