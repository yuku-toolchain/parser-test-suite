var r = /./;
var poisonedLength = {
  get length() {}
};
r.exec = function () {
  return poisonedLength;
};