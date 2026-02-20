var callCount = 0;
class C {
  static *method([[x, y, z] = [4, 5, 6]] = []) {
    callCount = callCount + 1;
  }
}
C.method().next();