let classStringExpression = `(
class {
  static #m() { return 'test262'; }
static access() {
    return this.#m();
  }
}
)`;
let evalClass = function () {
  return eval(classStringExpression);
};
let C1 = evalClass();
let C2 = evalClass();