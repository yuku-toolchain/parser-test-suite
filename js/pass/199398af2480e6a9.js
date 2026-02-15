let o = {};
Object.defineProperty(o, "b", {
  value: 3,
  enumerable: false
});
var callCount = 0;
class Test262ParentClass {
  constructor(obj) {
    callCount += 1;
  }
}
class Test262ChildClass extends Test262ParentClass {
  constructor() {
    super({
      ...o
    });
  }
}
new Test262ChildClass();