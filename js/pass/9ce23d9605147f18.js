var buffer = new ArrayBuffer(8);
function newTarget() {}
var proto = {};
newTarget.prototype = proto;
testWithBigIntTypedArrayConstructors(function (TA) {
  var ta = Reflect.construct(TA, [buffer], newTarget);
});