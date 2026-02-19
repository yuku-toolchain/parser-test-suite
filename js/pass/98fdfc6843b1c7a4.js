Array.prototype[Symbol.iterator] = function () {};
class Base {
  constructor(value) {
    this.value = value;
  }
}
class Derived extends Base {}
const instance = new Derived(5);