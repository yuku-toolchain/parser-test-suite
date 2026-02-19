class A {
  static method() {}
  static length() {}
}
var attr = 'length';
class B {
  static [attr]() {}
}
class C {
  static get length() {}
}
class D {
  static set length(_) {}
}
class E {
  static *length() {}
}