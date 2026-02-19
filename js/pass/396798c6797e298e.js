function thrower() {}
async function* f({x: y = thrower()} = {}) {}