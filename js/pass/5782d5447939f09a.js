var C2;
class C {
  constructor() {
    C2 = C;
  }
  m() {
    C2 = C;
  }
  get x() {
    C2 = C;
  }
  set x(_) {
    C2 = C;
  }
}
new C();
C2 = undefined;
new C().m();
C2 = undefined;
new C().x;
C2 = undefined;
new C().x = 1;