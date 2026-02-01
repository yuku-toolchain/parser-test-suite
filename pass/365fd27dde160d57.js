var fn = async function* () {};
var AsyncGeneratorPrototype = Object.getPrototypeOf(fn.prototype);
fn.prototype = undefined;
fn.prototype = null;
fn.prototype = false;
fn.prototype = '';
fn.prototype = Symbol();
fn.prototype = 1;