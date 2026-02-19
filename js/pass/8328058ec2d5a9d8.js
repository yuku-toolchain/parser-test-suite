var other = $262.createRealm().global;
var C = new other.Function();
C.prototype = null;
testWithBigIntTypedArrayConstructors(function (TA) {
  var ta = Reflect.construct(TA, [new TA()], C);
});