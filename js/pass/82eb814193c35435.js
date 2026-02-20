var key = {
  toString() {}
};
var obj = {
  m() {
    delete super[key];
  }
};