function thrower() {}
var f;
f = async function* h({x = thrower()} = {}) {};