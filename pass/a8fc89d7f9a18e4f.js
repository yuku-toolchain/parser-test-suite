function f1() {
  return (function () {
    "use strict";
    return typeof this;
  })() === "undefined" && this === global;
}