function thrower() {}
var f = async function* ({x = thrower()} = {}) {};