function hasProp(obj, name, expected, msg) {
  var hasOwnProperty = Object.prototype.hasOwnProperty.call(obj, name);
  var hasProperty = Reflect.has(obj, name);
}
var C = class {
  a = this.#m();
  #m() {
    return 42;
  }
  get bGetter() {
    return this.#b;
  }
  #b = this.#m();
  get ref() {
    return this.#m;
  }
  constructor() {
    hasProp(this, '#m', false, 'private methods are defined in an special internal slot and cannot be found as own properties');
  }
};
var c = new C();
var other = new C();
hasProp(C.prototype, '#m', false, 'method is not defined in the prototype');
hasProp(C, '#m', false, 'method is not defined in the contructor');
hasProp(c, '#m', false, 'method cannot be seen outside of the class');