var initCount = 0;
function thrower() {}
async function* f({a, b = thrower(), c = ++initCount}) {}