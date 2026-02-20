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
returnValue = date.setHours(arg);
returnValue = date.setHours(null);
returnValue = date.setHours(true);
returnValue = date.setHours(false);
returnValue = date.setHours('   +00200.000E-0002	');
returnValue = date.setHours();