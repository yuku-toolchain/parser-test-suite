function thrower() {}
var f;
f = async function* h({[thrower()]: x} = {}) {};