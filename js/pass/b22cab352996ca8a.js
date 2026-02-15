var date = new Date(NaN);
var effects = [];
var argSec = {
  valueOf: function () {
    effects.push('valueOf sec');
    return 0;
  }
};
var argMs = {
  valueOf: function () {
    effects.push('valueOf ms');
    return 0;
  }
};
var returnValue = date.setSeconds(argSec, argMs);
var expectedEffects = ['valueOf sec', 'valueOf ms'];