function newTarget() {}
var proto = {};
newTarget.prototype = proto;
testWithBigIntTypedArrayConstructors(function (TA) {
  var ta = Reflect.construct(TA, [1], newTarget);
});