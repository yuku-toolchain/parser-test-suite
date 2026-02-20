var iter = {};
iter[Symbol.iterator] = function () {
  var nextCount = 3;
  return {
    next: function () {
      nextCount += 1;
      return {
        done: nextCount === 6,
        value: nextCount
      };
    }
  };
};
var callCount = 0;
class Test262ParentClass {
  constructor() {
    callCount += 1;
  }
}
class Test262ChildClass extends Test262ParentClass {
  constructor() {
    super(1, 2, 3, ...iter);
  }
}
new Test262ChildClass();