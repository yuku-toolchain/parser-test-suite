function newTarget() {}
newTarget.prototype = null;
var o = [];
testWithBigIntTypedArrayConstructors(function (TA) {
  var ta = Reflect.construct(TA, [o], newTarget);
});