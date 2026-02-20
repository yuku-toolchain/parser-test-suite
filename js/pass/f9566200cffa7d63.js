let o = {
  b: 2
};
Object.defineProperty(o, "a", {
  value: 1,
  enumerable: true,
  writable: false,
  configurable: true
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
      ...o,
      a: 3
    });
  }
}
new Test262ChildClass();