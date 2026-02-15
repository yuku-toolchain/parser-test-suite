if (new String("undefined").replace(x, Function("return arguments[1]+42;")) !== "42") {}
var x;