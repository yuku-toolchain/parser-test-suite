let f = function F(x, y) {};
let g = function (x, y) {};
assertToStringOrNativeFunction(f, "function  F  (  x  ,  y  )  {  ;  ;  }");
assertToStringOrNativeFunction(g, "function  (  x  ,  y  )  {  ;  ;  }");