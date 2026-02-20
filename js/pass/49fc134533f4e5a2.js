var callCount = 0;
class C {
  static method([{u: v, w: x, y: z} = {
    u: 444,
    w: 555,
    y: 666
  }] = [{
    u: 777,
    w: 888,
    y: 999
  }]) {
    callCount = callCount + 1;
  }
}
C.method();