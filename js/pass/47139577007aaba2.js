var callCount = 0;
class C {
  *method({x: y = 33}) {
    callCount = callCount + 1;
  }
}
new C().method({}).next();