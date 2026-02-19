var f1 = function () {
  "use strict";
  var f = function () {
    return typeof this;
  };
  return f() === "undefined" && typeof this === "undefined";
};