class C {
  static #f() {
    return 'static';
  }
  static access() {
    return this.#f();
  }
  #instanceMethod() {
    return 'instance';
  }
  instanceAccess() {
    return this.#instanceMethod();
  }
}
let c = new C();