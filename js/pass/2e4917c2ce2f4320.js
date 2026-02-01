let symbol = Symbol('foo');
let o = {};
o[symbol] = 1;
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
      d: 5
    });
  }
}
new Test262ChildClass();