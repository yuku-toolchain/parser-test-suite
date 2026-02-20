function thrower() {}
var f;
f = async function* ({x = thrower()}) {};