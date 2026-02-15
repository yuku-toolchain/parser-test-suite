var r = /./;
var retValue;
r.exec = function () {
  return retValue;
};
retValue = null;
retValue = {};