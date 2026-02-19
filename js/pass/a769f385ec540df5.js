var noop = function () {};
var subject = Object.preventExtensions({
  existing: null
});
subject.__defineSetter__('existing', noop);