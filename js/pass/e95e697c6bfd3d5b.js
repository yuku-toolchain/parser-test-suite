function f() {}
class A {
  x = f();
}
class C extends A {
  constructor() {
    super();
  }
}