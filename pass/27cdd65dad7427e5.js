class Base {
  constructor() {}
}
class Derived extends Base {
  constructor() {
    delete super[(super(), 0)];
  }
}