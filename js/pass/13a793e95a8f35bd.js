let classStringExpression = `
return class {
  get #m() { return 'test262'; }
access(o) {
    return o.#m;
  }
}
`;
let createAndInstantiateClass = function () {
  let realm = $262.createRealm();
  let classFactoryFunction = new realm.global.Function(classStringExpression);
  let Class = classFactoryFunction();
  let obj = new Class();
  obj.realm = realm;
  return obj;
};
let c1 = createAndInstantiateClass();
let c2 = createAndInstantiateClass();