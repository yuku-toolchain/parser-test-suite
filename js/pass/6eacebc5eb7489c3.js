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
returnValue = date.setMonth(arg);
returnValue = date.setMonth(null);
returnValue = date.setMonth(true);
returnValue = date.setMonth(false);
returnValue = date.setMonth('   +00200.000E-0002	');
returnValue = date.setMonth(undefined);