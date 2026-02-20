function f1() {
  "use strict";
  function f() {
    return typeof this;
  }
  return f() === "undefined" && typeof this === "undefined";
}