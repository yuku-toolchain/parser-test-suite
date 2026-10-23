let realm1 = $262.createRealm();
let realm2 = $262.createRealm();
let eval1 = realm1.global.eval;
let eval2 = realm2.global.eval;
let classStringExpression = `(
class {
  #m() { return 'test262'; }
access(o) {
    return o.#m();
  }
}
)`;
let createAndInstantiateClass = function (_eval) {
  return new (_eval(classStringExpression))();
};
let c1 = createAndInstantiateClass(eval1);
let c2 = createAndInstantiateClass(eval2);