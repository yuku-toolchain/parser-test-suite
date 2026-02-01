var initCount = 0;
function thrower() {}
function f({a, b = thrower(), c = ++initCount} = {}) {}