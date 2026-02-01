var C = class {
  #x = eval('() => arguments;');
  x() {
    this.#x();
  }
};