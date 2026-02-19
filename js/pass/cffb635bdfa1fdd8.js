var initCount = 0;
function thrower() {}
var f;
f = async function* h({a, b = thrower(), c = ++initCount} = {}) {};