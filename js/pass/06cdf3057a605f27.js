var initCount = 0;
function thrower() {}
var f = function ({a, b = thrower(), c = ++initCount}) {};