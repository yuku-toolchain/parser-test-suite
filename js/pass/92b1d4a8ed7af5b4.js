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
let evalClass = function () {
  return eval(classStringExpression);
};
let C1 = evalClass();
let C2 = evalClass();
C1.access();
C2.access();