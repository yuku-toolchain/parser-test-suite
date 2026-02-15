var C = class {
  #outer = 'test262';
  B_withoutPrivateField = class {
    method(o) {
      return o.#outer;
    }
  };
  B_withPrivateField = class {
    #inner = 42;
    method(o) {
      return o.#outer;
    }
  };
};
let c = new C();
let innerB1 = new c.B_withoutPrivateField();
let innerB2 = new c.B_withPrivateField();