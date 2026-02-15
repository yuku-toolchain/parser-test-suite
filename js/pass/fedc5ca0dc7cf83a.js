var callCount = 0;
class C {
  static *method({w: [x, y, z] = [4, 5, 6]}) {
    callCount = callCount + 1;
  }
}
C.method({
  w: [7, undefined]
}).next();