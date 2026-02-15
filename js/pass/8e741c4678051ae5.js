var f1 = function () {
  "use strict";
  return (function () {
    return typeof this;
  })() === "undefined" && typeof this === "undefined";
};