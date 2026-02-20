var f1 = function () {
  var f = function () {
    "use strict";
    return typeof this;
  };
  return f() === "undefined" && this === global;
};