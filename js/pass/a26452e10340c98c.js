var date = new Date(0);
var callCount = 0;
var originalValue = date.getTime();
var obj = {
  valueOf: function () {}
};
var counter = {
  valueOf: function () {
    callCount += 1;
  }
};