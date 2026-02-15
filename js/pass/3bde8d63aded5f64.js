var f1 = function () {
  return (function () {
    "use strict";
    return typeof this;
  })() === "undefined" && this === global;
};