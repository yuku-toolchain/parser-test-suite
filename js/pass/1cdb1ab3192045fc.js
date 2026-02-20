var count = 0;
class A {
  increment() {
    count++;
  }
}
class B extends A {
  incrementer() {
    (_ => super.increment())();
  }
}
var bar = new B();
bar.incrementer();