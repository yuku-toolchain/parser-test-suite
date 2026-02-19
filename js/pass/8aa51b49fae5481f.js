class A {
  set #f(v) {}
}
class B extends A {
  get #f() {}
  setAccess() {
    this.#f = 'Test262';
  }
}
let b = new B();
class C {
  set #f(v) {}
  Inner = class {
    get #f() {}
    setAccess() {
      this.#f = 'Test262';
    }
  };
}
let c = new C();
let innerC = new c.Inner();
class D {
  get #f() {}
  Inner = class {
    set #f(v) {}
  };
  setAccess() {
    this.#f = 'Test262';
  }
}
let d = new D();