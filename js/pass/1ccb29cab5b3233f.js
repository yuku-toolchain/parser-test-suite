class A {
  set #f(v) {}
}
class B extends A {
  #f() {}
  setAccess() {
    this.#f = 'Test262';
  }
}
let b = new B();
class C {
  set #f(v) {}
  Inner = class {
    #f() {}
    setAccess() {
      this.#f = 'Test262';
    }
  };
}
let c = new C();
let innerC = new c.Inner();
class D {
  #f() {}
  Inner = class {
    set #f(v) {}
  };
  setAccess() {
    this.#f = 'Test262';
  }
}
let d = new D();