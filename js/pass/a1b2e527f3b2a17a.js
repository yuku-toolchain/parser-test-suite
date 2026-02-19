var source = [2, 3, 4];
var target;
var callCount = 0;
class Test262ParentClass {
  constructor() {
    callCount += 1;
  }
}
class Test262ChildClass extends Test262ParentClass {
  constructor() {
    super(...target = source);
  }
}
new Test262ChildClass();