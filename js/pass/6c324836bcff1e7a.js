let createAndInstantiateClass = function () {
  const C = class {
    #m() {
      return 'test262';
    }
    access(o) {
      return o.#m();
    }
  };
  return new C();
};
let c1 = createAndInstantiateClass();
let c2 = createAndInstantiateClass();