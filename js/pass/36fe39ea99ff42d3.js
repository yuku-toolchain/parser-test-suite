var o;
eval("o = {set foo(arg){return 1;}};");
var desc = Object.getOwnPropertyDescriptor(o, "foo");