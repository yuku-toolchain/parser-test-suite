var buffer = new SharedArrayBuffer(8);
function newTarget() {}
newTarget.prototype = null;
testWithBigIntTypedArrayConstructors(function (TA) {
  var ta = Reflect.construct(TA, [buffer], newTarget);
});