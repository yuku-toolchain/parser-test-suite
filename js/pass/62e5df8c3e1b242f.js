class Test262ParentClass {
  constructor() {}
}
class Test262ChildClass extends Test262ParentClass {
  constructor() {
    super(...(function* () {})());
  }
}