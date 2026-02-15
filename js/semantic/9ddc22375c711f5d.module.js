var arguments = 1;
class C {
  #x = (0, eval)('arguments;');
  x() {
    return this.#x;
  }
}