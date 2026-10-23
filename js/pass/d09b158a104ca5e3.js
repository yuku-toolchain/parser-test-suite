let realm1 = $262.createRealm();
let realm2 = $262.createRealm();
let eval1 = realm1.global.eval;
let eval2 = realm2.global.eval;
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
let c1 = createAndInstantiateClass(eval1);
let c2 = createAndInstantiateClass(eval2);
c1.access(c1, 'test262');
c2.access(c2, 'test262');