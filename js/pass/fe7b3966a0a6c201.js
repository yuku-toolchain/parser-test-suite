var callCount = 0;
class Test262ParentClass {
  constructor(obj) {
    callCount += 1;
  }
}
class Test262ChildClass extends Test262ParentClass {
  constructor() {
    super({
      a: 1,
      b: 2,
      ...undefined
    });
  }
}
new Test262ChildClass();