var iter = {};
iter[Symbol.iterator] = function () {
  var nextCount = 0;
  return {
    next: function () {
      nextCount += 1;
      return {
        done: nextCount === 3,
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
    super(...iter);
  }
}
new Test262ChildClass();