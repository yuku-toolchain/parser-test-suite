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
returnValue = date.setMinutes(0, arg);
returnValue = date.setMinutes(0, null);
returnValue = date.setMinutes(0, true);
returnValue = date.setMinutes(0, false);
returnValue = date.setMinutes(0, '   +00200.000E-0002	');
returnValue = date.setMinutes(0, undefined);