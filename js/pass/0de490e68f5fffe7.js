var C = class {
  static get #f() {
    return 'Test262';
  }
  static access() {
    const arrowFunction = () => {
      return this.#f;
    };
    return arrowFunction();
  }
};