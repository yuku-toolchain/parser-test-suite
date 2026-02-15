var callCount = 0;
class C {
  static method({a, b, ...rest}) {
    callCount = callCount + 1;
  }
}
C.method({
  x: 1,
  y: 2,
  a: 5,
  b: 3
});