var customNewTarget = function () {};
var newTarget = null;
function f() {
  newTarget = new.target;
}
Reflect.construct(f, []);
Reflect.construct(f, [], customNewTarget);