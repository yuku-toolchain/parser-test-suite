let classStringExpression = `(
class {
  get #m() { return 'test262'; }
access(o) {
    return o.#m;
  }
}
)`;
let createAndInstantiateClass = function () {
  return new (eval(classStringExpression))();
};
let c1 = createAndInstantiateClass();
let c2 = createAndInstantiateClass();