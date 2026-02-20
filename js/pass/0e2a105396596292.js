var noop = function () {};
var subject = Object.preventExtensions({
  existing: null
});
subject.__defineGetter__('existing', noop);