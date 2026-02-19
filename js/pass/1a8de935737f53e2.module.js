function f1() {
  function f() {
    return typeof this;
  }
  return f() === "undefined" && typeof this === "undefined";
}