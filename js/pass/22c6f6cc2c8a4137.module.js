var f1 = function () {
  return (function () {
    return typeof this;
  })() === "undefined" && typeof this === "undefined";
};