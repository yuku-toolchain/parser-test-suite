class A {}
class C extends A {
  x = (0, eval)('() => super()["x"];');
}