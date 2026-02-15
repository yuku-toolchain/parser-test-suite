var s1 = "First getter";
var s2 = "First setter";
var s3 = "Second getter";
var o;
eval("o = {get foo(){ return s1;},set foo(arg){return s2 = s3}, get bar(){ return s3}, set bar(arg){ s3 = arg;}};");
o.foo = 10;
o.bar = "Second setter";