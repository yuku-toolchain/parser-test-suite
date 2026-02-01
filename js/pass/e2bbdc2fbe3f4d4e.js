var f1 = function () {
  function f() {
    "use strict";
    return typeof this;
  }
  return f() === "undefined" && this === global;
};