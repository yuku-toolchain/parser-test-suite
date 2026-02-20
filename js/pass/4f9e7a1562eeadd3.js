let getterCallCount = 0;
let o = {
  get a() {
    return ++getterCallCount;
  }
};
var callCount = 0;
class Test262ParentClass {
  constructor(obj) {
    callCount += 1;
  }
}
class Test262ChildClass extends Test262ParentClass {
  constructor() {
    super({
      ...o,
      c: 4,
      d: 5,
      a: 42,
      ...o
    });
  }
}
new Test262ChildClass();