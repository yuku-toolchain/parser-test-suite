let createAndInstantiateClass = function () {
  class C {
    #m() {
      return 'test262';
    }
    getPrivateMethod() {
      return this.#m;
    }
  }
  return new C();
};
let c1 = createAndInstantiateClass();
let c2 = createAndInstantiateClass();