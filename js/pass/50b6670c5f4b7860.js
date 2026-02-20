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
returnValue = date.setMilliseconds(arg);
returnValue = date.setMilliseconds(null);
returnValue = date.setMilliseconds(true);
returnValue = date.setMilliseconds(false);
returnValue = date.setMilliseconds('   +00200.000E-0002	');
returnValue = date.setMilliseconds();