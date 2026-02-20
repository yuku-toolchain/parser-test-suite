var r = /./;
var poisonedIndex = {
  get index() {}
};
r.exec = function () {
  return poisonedIndex;
};