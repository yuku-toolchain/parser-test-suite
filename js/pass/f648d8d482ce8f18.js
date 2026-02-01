async function foo(a) {}
var obj = {};
foo.call(obj, obj).then($DONE, $DONE);