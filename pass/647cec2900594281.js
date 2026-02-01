function thrower() {}
var f;
f = async function* g({x = thrower()}) {};