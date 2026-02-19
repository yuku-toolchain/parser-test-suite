class A {
  static method() {}
  static name() {}
}
var attr = 'name';
class B {
  static [attr]() {}
}
class C {
  static get name() {}
}
class D {
  static set name(_) {}
}
class E {
  static *name() {}
}