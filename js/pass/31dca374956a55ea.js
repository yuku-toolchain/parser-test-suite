class Base {
  constructor() {}
}
class Derived extends Base {
  constructor() {
    return super[super()];
  }
}