var o;
eval("o = {get foo(){return 1;}};");
var desc = Object.getOwnPropertyDescriptor(o, "foo");