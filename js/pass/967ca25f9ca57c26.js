var newTarget = null;
function f() {
  newTarget = new.target;
}
Reflect.apply(f, {}, []);