var executed = false;
class A {}
class C extends A {
  x = (0, eval)('executed = true; super().x;');
}