let GeneratorFunction = Object.getPrototypeOf(function*(){}).constructor;
let g = GeneratorFunction("a", "  b, c
assertToStringOrNativeFunction(g, "function* anonymous(a,  b, c