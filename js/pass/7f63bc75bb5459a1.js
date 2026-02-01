let count = 0;
class C {
  #p = 1;
  method() {
    count++;
    try {
      count++;
      this.#p;
    } catch (e) {
      count++;
      if (e instanceof TypeError) {}
    }
  }
}