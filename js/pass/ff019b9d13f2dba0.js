let classStringExpression = `
return class {
  get #m() { return 'test262'; }
access(o) {
    return o.#m;
  }
}
`;
let createAndInstantiateClass = function () {
  let classFactoryFunction = new Function(classStringExpression);
  let Class = classFactoryFunction();
  return new Class();
};
let c1 = createAndInstantiateClass();
let c2 = createAndInstantiateClass();