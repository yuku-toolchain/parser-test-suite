function thrower() {}
var f = async function* ({x: y = thrower()} = {}) {};