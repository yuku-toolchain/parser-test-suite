var calls = 0;
class B {}
B.prototype.x = 42;
class C extends B {
  constructor() {
    super();
    calls++;
  }
}
new C();