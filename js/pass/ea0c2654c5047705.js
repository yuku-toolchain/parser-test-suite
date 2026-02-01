class A {
  constructor(arg) {
    return arg;
  }
}
class C extends A {
  #x;
  constructor(arg) {
    super(arg);
  }
}
var containsprivatex = new C();