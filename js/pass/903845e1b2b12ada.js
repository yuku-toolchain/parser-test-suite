delete Array.prototype[Symbol.iterator];
async function* f([x, y, z]) {}