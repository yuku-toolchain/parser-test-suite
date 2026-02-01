let classStringExpression = `
return class {
  static #m = 'test262';
static access() {
    return this.#m;
  }
}
`;
let createClass = function () {
  let classFactoryFunction = new Function(classStringExpression);
  return classFactoryFunction();
};
let C1 = createClass();
let C2 = createClass();