var stepFiveOccurs = false;
var fromIndex = {
  valueOf: function () {
    stepFiveOccurs = true;
    return 0;
  }
};