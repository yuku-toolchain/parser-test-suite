var f1 = function () {
  var f = function () {
    return typeof this;
  };
  return f() === "undefined" && typeof this === "undefined";
};