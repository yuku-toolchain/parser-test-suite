let classStringExpression = `(
class {
  static #m = 'test262';
static access() {
    return this.#m;
  }
}
)`;
let evalClass = function () {
  return eval(classStringExpression);
};
let C1 = evalClass();
let C2 = evalClass();