let createClass = function () {
  return class {
    static #m = 'test262';
    static access() {
      return this.#m;
    }
  };
};
let C1 = createClass();
let C2 = createClass();