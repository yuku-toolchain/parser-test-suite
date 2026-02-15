var iter = {};
var poisonedValue = Object.defineProperty({}, 'value', {
  get: function () {}
});
iter[Symbol.iterator] = function () {
  return {
    next: function () {
      return poisonedValue;
    }
  };
};
class Test262ParentClass {
  constructor() {}
}
class Test262ChildClass extends Test262ParentClass {
  constructor() {
    super(...iter);
  }
}