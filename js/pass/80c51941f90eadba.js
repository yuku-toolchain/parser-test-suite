var iter = (function* () {})();
async function* f([...x] = iter) {}