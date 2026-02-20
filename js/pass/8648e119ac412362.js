var r = /./;
var retValue;
r.exec = function () {
  return retValue;
};
retValue = undefined;
retValue = true;
retValue = 'string';
retValue = Symbol.match;
retValue = 86;