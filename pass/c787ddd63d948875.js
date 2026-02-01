function f1() {
  function f() {
    "use strict";
    return typeof this;
  }
  return f() === "undefined" && this === global;
}