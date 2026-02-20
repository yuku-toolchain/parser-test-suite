var retVal;
var fakeRe = {
  exec: function () {
    return retVal;
  }
};
retVal = undefined;
retVal = 86;
retVal = 'string';
retVal = true;
retVal = Symbol();