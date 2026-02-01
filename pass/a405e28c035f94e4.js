var callCount = 0;
class C {
  static method([{x, y, z} = {
    x: 44,
    y: 55,
    z: 66
  }] = [{
    x: 11,
    y: 22,
    z: 33
  }]) {
    callCount = callCount + 1;
  }
}
C.method();