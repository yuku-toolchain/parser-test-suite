let classStringExpression = `(
class {
  get #m() { return 'test262'; }
access(o) {
    return o.#m;
  }
}
)`;
let createAndInstantiateClass = function (_eval) {
  return new (_eval(classStringExpression))();
};
let c1 = createAndInstantiateClass(eval);
let c2 = createAndInstantiateClass(eval);