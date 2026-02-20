var date = new Date(NaN);
var effects = [];
var argMonth = {
  valueOf: function () {
    effects.push('valueOf month');
    return 0;
  }
};
var argDate = {
  valueOf: function () {
    effects.push('valueOf date');
    return 0;
  }
};
var returnValue = date.setUTCMonth(argMonth, argDate);
var expectedEffects = ['valueOf month', 'valueOf date'];