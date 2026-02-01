class A {
  static method() {}
  static name() {}
}
var attr = 'name';
class B {
  static [attr]() {}
}
var isDefined = false;
class C {
  static get name() {
    if (isDefined) {
      return 'pass';
    }
  }
}
isDefined = true;
class D {
  static set name(_) {}
}
class E {
  static *name() {}
}