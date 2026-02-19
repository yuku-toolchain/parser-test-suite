function thrower() {}
var f = async function* ({[thrower()]: x} = {}) {};