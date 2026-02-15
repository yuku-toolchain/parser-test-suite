class C {
  #m() {
    return 'Test262';
  }
  method() {
    let arrowFunction = () => {
      return this.#m();
    };
    return arrowFunction();
  }
}
let c = new C();
let o = {};