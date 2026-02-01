var iter = {};
iter[Symbol.iterator] = function () {};
class Test262ParentClass {
  constructor() {}
}
class Test262ChildClass extends Test262ParentClass {
  constructor() {
    super(0, ...iter);
  }
}