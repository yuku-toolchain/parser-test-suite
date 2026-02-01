var callCount = 0;
class C {
  static method({w: {x, y, z} = {
    x: 4,
    y: 5,
    z: 6
  }}) {
    callCount = callCount + 1;
  }
}
C.method({
  w: {
    x: undefined,
    z: 7
  }
});