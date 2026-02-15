let o = {
  a: 2,
  b: 3
};
let o2 = {
  c: 4,
  d: 5
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
      ...o2
    });
  }
}
new Test262ChildClass();