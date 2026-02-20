var y = null;
async function foo(x = y()) {}
foo().then(function () {}, function () {});