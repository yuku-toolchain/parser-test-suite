function newTarget() {}
newTarget.prototype = null;
testWithBigIntTypedArrayConstructors(function (TA) {
  var ta = Reflect.construct(TA, [1], newTarget);
});