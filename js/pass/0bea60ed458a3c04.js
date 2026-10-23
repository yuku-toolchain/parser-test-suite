let global1 = $262.createRealm().global;
let global2 = $262.createRealm().global;
let eval1 = global1.eval;
let eval2 = global2.eval;
let classStringExpression = `(
class {
  static set #m(v) {
    this._v = v;
  }
static access() {
    this.#m = 'test262';
  }
}
)`;
let evalClass = function (_eval) {
  return _eval(classStringExpression);
};
let C1 = evalClass(eval1);
let C2 = evalClass(eval2);
C1.access();
C2.access();