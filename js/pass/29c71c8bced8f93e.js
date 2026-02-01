function thrower() {}
var f;
f = async function* ({x: y = thrower()}) {};