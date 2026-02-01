class A {
  get #f() {}
}
class C extends A {
  set #f(v) {}
  getAccess() {
    return this.#f;
  }
}
let c = new C();
class B {
  get #f() {}
  Inner = class {
    set #f(v) {}
    getAccess() {
      return this.#f;
    }
  };
}
let b = new B();
let innerB = new b.Inner();
class D {
  set #f(v) {}
  Inner = class {
    get #f() {}
  };
  getAccess() {
    return this.#f;
  }
}
let d = new D();