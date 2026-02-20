let o = {
  a: 2,
  b: 3
};
let executedGetter = false;
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
      get c() {
        executedGetter = true;
      }
    });
  }
}
new Test262ChildClass();