var other = $262.createRealm().global;
var C = new other.Function();
C.prototype = null;
var buffer = new SharedArrayBuffer(0);
var o = Reflect.construct(DataView, [buffer, 0], C);