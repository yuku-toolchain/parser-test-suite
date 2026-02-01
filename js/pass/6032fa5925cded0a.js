var expectedNewTarget = function () {};
var thisValue, instance, args, actualNewTarget;
function Parent() {
  thisValue = this;
  args = arguments;
  actualNewTarget = new.target;
}
class Child extends Parent {
  constructor() {
    super(1, 2, 3);
  }
}
instance = Reflect.construct(Child, [4, 5, 6], expectedNewTarget);