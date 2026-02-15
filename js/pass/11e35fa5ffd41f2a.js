let count = 0;
class C {
  #p = 1;
  method(v) {
    count++;
    try {
      count++;
      this.#p = v;
    } catch (e) {
      count++;
      if (e instanceof TypeError) {}
    }
  }
}