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
returnValue = date.setHours(0, arg);
returnValue = date.setHours(0, null);
returnValue = date.setHours(0, true);
returnValue = date.setHours(0, false);
returnValue = date.setHours(0, '   +00200.000E-0002	');
returnValue = date.setHours();