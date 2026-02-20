var re = /(?:)/;
re.exec = function () {
  re.lastIndex = -0;
  return null;
};