let o = {
  a: 2,
  b: 3
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
      a: 1,
      b: 7,
      ...o
    });
  }
}
new Test262ChildClass();