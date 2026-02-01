var RegExpStringIteratorProto = Object.getPrototypeOf((/./)[Symbol.matchAll](''));
var thisValue;
var callNext = function () {
  RegExpStringIteratorProto.next.call(thisValue);
};
thisValue = null;
thisValue = true;
thisValue = '';
thisValue = Symbol();
thisValue = 1;