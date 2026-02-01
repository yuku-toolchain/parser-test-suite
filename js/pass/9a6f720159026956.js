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
returnValue = date.setTime(arg);
returnValue = date.setTime(null);
returnValue = date.setTime(true);
returnValue = date.setTime(false);
returnValue = date.setTime('   +00200.000E-0002	');
returnValue = date.setTime();