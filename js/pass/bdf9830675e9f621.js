var date = new Date(NaN);
var callCount = 0;
var arg = {
  valueOf: function () {
    callCount += 1;
    return 0;
  }
};
var returnValue = date.setUTCDate(arg);