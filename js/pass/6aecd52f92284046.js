function newTarget() {}
newTarget.prototype = null;
testWithBigIntTypedArrayConstructors(function (TA) {
  var ta = Reflect.construct(TA, [], newTarget);
});