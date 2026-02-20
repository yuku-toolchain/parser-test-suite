var source = [3, 4, 5];
var target;
var callCount = 0;
class Test262ParentClass {
  constructor() {
    callCount += 1;
  }
}
class Test262ChildClass extends Test262ParentClass {
  constructor() {
    super(1, 2, ...target = source);
  }
}
new Test262ChildClass();