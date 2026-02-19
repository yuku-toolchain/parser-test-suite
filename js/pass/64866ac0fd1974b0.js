var x = 3;
function f() {
  "use strict";
  x = this;
  return "a";
}