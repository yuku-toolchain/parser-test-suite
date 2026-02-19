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
returnValue = date.setMonth(6, arg);
returnValue = date.setMonth(6, null);
returnValue = date.setMonth(6, true);
returnValue = date.setMonth(6, false);
returnValue = date.setMonth(6, '   +00200.000E-0002	');
returnValue = date.setMonth(6, undefined);