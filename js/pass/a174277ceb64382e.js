var sym = Symbol();
var string = new String("str");
string[sym] = 1;
var stringTarget = new Proxy(string, {});
var stringProxy = new Proxy(stringTarget, {});