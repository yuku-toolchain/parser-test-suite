let classStringExpression = `(
class {
  static set #m(v) {
    this._v = v;
  };
static access() {
    this.#m = 'test262';
  }
}
)`;
let evalClass = function (_eval) {
  return _eval(classStringExpression);
};
let C1 = evalClass(eval);
let C2 = evalClass(eval);
C1.access();
C2.access();