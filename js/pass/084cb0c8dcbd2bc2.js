var C = class {
  #f = 'Test262';
  method() {
    let arrowFunction = () => {
      return this.#f;
    };
    return arrowFunction();
  }
};
let c = new C();
let o = {};