let createAndInstantiateClass = function () {
  const C = class {
    get #m() {
      return 'test262';
    }
    access(o) {
      return o.#m;
    }
  };
  let c = new C();
  return c;
};
let c1 = createAndInstantiateClass();
let c2 = createAndInstantiateClass();