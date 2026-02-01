var o = {};
var desc = {};
Object.defineProperty(o, "foo", desc);
var propDesc = Object.getOwnPropertyDescriptor(o, "foo");