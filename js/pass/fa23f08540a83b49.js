let o = {
  a: 2,
  b: 3,
  c: 4,
  e: undefined,
  f: null,
  g: false
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
      a: 1,
      b: 7,
      d: 5,
      h: -0,
      i: Symbol("foo"),
      j: o
    });
  }
}
new Test262ChildClass();