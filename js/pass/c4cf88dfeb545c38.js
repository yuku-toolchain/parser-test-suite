let classStringExpression = `
return class {
  set #m(v) { this._v = v; }
access(o, v) {
    o.#m = v;
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
c1.access(c1, 'test262');
c2.access(c2, 'test262');