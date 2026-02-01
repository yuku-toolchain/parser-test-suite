class S {
  #method() {
    return 'super class';
  }
  superAccess() {
    return this.#method();
  }
}
class C extends S {
  #method() {
    return 'test262';
  }
  access() {
    return this.#method();
  }
}
let c = new C();
let s = new S();