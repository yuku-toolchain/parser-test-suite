var poisonedIndex = {
  get index() {}
};
var fakeRe = {
  exec: function () {
    return poisonedIndex;
  }
};