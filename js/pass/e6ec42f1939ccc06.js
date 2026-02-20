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
returnValue = date.setSeconds(arg);
returnValue = date.setSeconds(null);
returnValue = date.setSeconds(true);
returnValue = date.setSeconds(false);
returnValue = date.setSeconds('   +00200.000E-0002	');
returnValue = date.setSeconds();