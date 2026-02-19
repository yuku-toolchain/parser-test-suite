var C = class {
  field = function () {};
  #field = (a, b, c, d) => undefined;
  accessPrivateField() {
    return this.#field;
  }
};
let c = new C();