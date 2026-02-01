var re = /(?:)/;
var execLastIndex;
re.lastIndex = -0;
re.exec = function () {
  execLastIndex = re.lastIndex;
  return null;
};