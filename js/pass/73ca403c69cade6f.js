var arguments = 1;
var C = class {
  #x = () => (0, eval)('arguments;');
  x() {
    return this.#x();
  }
};