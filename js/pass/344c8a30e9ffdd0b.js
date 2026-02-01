function thrower() {}
async function* f({x = thrower()}) {}