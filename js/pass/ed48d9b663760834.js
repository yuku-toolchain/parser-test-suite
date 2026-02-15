let classStringExpression = `(
class {
  set #m(v) { this._v = v; }
access(o, v) {
    o.#m = v;
  }
}
)`;
let createAndInstantiateClass = function (_eval) {
  return new (_eval(classStringExpression))();
};
let c1 = createAndInstantiateClass(eval);
let c2 = createAndInstantiateClass(eval);
c1.access(c1, 'test262');
c2.access(c2, 'test262');