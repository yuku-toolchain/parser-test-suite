var callCount = 0;
class Test262ParentClass {
  constructor(obj) {
    callCount += 1;
  }
}
class Test262ChildClass extends Test262ParentClass {
  constructor() {
    super({
      ...null
    });
  }
}
new Test262ChildClass();