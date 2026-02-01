var callCount = 0;
class C {
  method([{x, y, z} = {
    x: 44,
    y: 55,
    z: 66
  }]) {
    callCount = callCount + 1;
  }
}
new C().method([]);