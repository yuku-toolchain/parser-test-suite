let o = {
  c: 3,
  d: 4
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
      ...o
    });
  }
}
new Test262ChildClass();