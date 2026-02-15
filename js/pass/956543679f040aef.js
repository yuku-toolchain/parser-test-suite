function f() {
  "use strict";
  return this;
}
function foo() {
  return f();
}