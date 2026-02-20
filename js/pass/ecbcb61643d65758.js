var o;
eval("o = {set foo(arg){}};");
var desc = Object.getOwnPropertyDescriptor(o, "foo");