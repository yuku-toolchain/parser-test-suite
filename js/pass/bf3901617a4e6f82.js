var count = 0;
var callCount = 0;
class C {
  *method({...x} = {
    get v() {
      count++;
      return 2;
    }
  }) {
    callCount = callCount + 1;
  }
}
new C().method().next();