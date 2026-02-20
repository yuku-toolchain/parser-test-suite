var args;
class A {
  constructor() {
    args = arguments;
  }
}
class B extends A {}
new B(0, 1, 2);