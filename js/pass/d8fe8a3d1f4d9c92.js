var initCount = 0;
function thrower() {}
var f;
f = async function* ({a, b = thrower(), c = ++initCount}) {};