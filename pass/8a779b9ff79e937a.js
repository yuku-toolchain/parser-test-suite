var FACTORY = new Function("arg1,arg2", "var x =1; this.y=arg1+arg2;return \"OK\";");
var obj = new FACTORY("1", 2);