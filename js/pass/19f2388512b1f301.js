function f(o) {
  function innerf(o) {
    with (o) {
      return x;
    }
  }
  return innerf(o);
}