let global1 = $262.createRealm().global;
let global2 = $262.createRealm().global;
let eval1 = global1.eval;
let eval2 = global2.eval;
let classStringExpression = `(
class {
  static get #m() {
    return 'test262';
  };
static access() {
    return this.#m;
  }
}
)`;
let evalClass = function (_eval) {
  return _eval(classStringExpression);
};
let C1 = evalClass(eval1);
let C2 = evalClass(eval2);