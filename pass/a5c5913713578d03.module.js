function f1() {
  return (function () {
    return typeof this;
  })() === "undefined" && typeof this === "undefined";
}