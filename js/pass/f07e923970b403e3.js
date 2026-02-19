var other = $262.createRealm().global;
var C = new other.Function();
C.prototype = null;
var P = new Proxy(function () {}, {});
var p = Reflect.construct(P, [], C);