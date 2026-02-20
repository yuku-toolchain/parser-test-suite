var ctorPromise;
function hasProp(obj, name, expected, msg) {
  var hasOwnProperty = Object.prototype.hasOwnProperty.call(obj, name);
  var hasProperty = Reflect.has(obj, name);
}
class C {
  async *#m() {
    return 42;
  }
  get ref() {
    return this.#m;
  }
  constructor() {
    hasProp(this, '#m', false, 'private methods are defined in an special internal slot and cannot be found as own properties');
    var ctorIter = this.#m();
    var p = ctorIter.next();
    ctorPromise = p.then(({value, done}) => {}, $DONE);
  }
}
var c = new C();
var other = new C();
hasProp(C.prototype, '#m', false, 'method is not defined in the prototype');
hasProp(C, '#m', false, 'method is not defined in the contructor');
hasProp(c, '#m', false, 'method cannot be seen outside of the class');
ctorPromise.then(() => {
  var iter = c.ref();
  return iter.next().then(({value, done}) => {});
}).then($DONE, $DONE);