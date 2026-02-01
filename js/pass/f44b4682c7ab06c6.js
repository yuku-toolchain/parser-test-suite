var other = $262.createRealm().global;
other.shared = null;
var C = new other.Function('shared = this; return /./;');
C.prototype = null;
var r = /./;
r.constructor = function () {};
r.constructor[Symbol.species] = C;
r[Symbol.split]();