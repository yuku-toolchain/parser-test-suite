var other = $262.createRealm().global;
var C = new other.Function();
C.prototype = null;
var o = Reflect.construct(Date, [1970, 0], C);