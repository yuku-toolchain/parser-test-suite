var date = new Date(2016, 6, 7, 11, 36, 23, 2);
var callCount = 0;
var arg = {
  valueOf: function () {
    args = arguments;
    thisValue = this;
    callCount += 1;
    return 2;
  }
};
var args, thisValue, returnValue;
returnValue = date.setFullYear(arg);
returnValue = date.setFullYear(null);
returnValue = date.setFullYear(true);
returnValue = date.setFullYear(false);
returnValue = date.setFullYear('   +00200.000E-0002	');
returnValue = date.setFullYear();