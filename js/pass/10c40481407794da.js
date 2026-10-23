let classStringExpression = `(
class {
  static #m = 'test262';
static access() {
    return this.#m;
  }
}
)`;
let evalClass = function (_eval) {
  return _eval(classStringExpression);
};
let C1 = evalClass(eval);
let C2 = evalClass(eval);