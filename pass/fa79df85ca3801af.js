var callCount = 0;
class C {
  *method({w: [x, y, z] = [4, 5, 6]}) {
    callCount = callCount + 1;
  }
}
new C().method({}).next();