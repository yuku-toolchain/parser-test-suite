var initCount = 0;
function thrower() {}
var f = ({a, b = thrower(), c = ++initCount}) => {};