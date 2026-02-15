var initCount = 0;
function thrower() {}
var f;
f = async function* g({a, b = thrower(), c = ++initCount}) {};