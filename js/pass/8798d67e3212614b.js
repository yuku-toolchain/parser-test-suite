var date = new Date(2016, 6);
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
returnValue = date.setSeconds(0, arg);
returnValue = date.setSeconds(0, null);
returnValue = date.setSeconds(0, true);
returnValue = date.setSeconds(0, false);
returnValue = date.setSeconds(0, '   +00200.000E-0002	');
returnValue = date.setSeconds(0, undefined);