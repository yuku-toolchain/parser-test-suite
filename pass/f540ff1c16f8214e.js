var callCount = 0;
class Test262ParentClass {
  constructor() {
    callCount += 1;
  }
}
class Test262ChildClass extends Test262ParentClass {
  constructor() {
    super(5, ...[6, 7, 8], 9);
  }
}
new Test262ChildClass();