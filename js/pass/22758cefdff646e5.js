var baseNewTarget, parentNewTarget;
class Base {
  constructor() {
    baseNewTarget = new.target;
  }
}
class Parent extends Base {
  constructor() {
    parentNewTarget = new.target;
    super();
  }
}
class Child extends Parent {
  constructor() {
    super();
  }
}
new Child();