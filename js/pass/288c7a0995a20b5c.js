var s1 = "In getter";
var s2 = "In setter";
var s3 = "Modified by setter";
var o;
eval("o = {get foo(){ return s1;},set foo(arg){return s2 = s3}};");
o.foo = 10;