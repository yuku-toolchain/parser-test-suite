class Outer {
  #x = 42;
  innerclass() {
    return class extends Outer {
      f() {
        this.#x = 1;
      }
    };
  }
  value() {
    return this.#x;
  }
}
var outer = new Outer();
var Inner = outer.innerclass();
var i = new Inner();
i.f();