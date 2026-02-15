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
returnValue = date.setMinutes(arg);
returnValue = date.setMinutes(null);
returnValue = date.setMinutes(true);
returnValue = date.setMinutes(false);
returnValue = date.setMinutes('   +00200.000E-0002	');
returnValue = date.setMinutes();