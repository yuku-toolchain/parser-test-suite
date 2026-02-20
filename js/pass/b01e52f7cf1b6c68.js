class A {
  static method() {}
  static length() {}
}
var attr = 'length';
class B {
  static [attr]() {}
}
var isDefined = false;
class C {
  static get length() {
    if (isDefined) {
      return 'pass';
    }
  }
}
isDefined = true;
class D {
  static set length(_) {}
}
class E {
  static *length() {}
}