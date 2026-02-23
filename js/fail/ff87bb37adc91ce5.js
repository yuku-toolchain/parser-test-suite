async function f() {}
var AsyncFunction = f.constructor;
var g = AsyncFunction("a", "  b, c
assertToStringOrNativeFunction(g, "async function anonymous(a,  b, c