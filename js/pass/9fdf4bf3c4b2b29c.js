function thrower() {}
var f;
f = async function* ({[thrower()]: x}) {};