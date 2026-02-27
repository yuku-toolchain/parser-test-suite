async function* f() {}
var AsyncGenerator = f.constructor;
var g = AsyncGenerator("a", "  b, c
assertToStringOrNativeFunction(g, "async function* anonymous(a,  b, c