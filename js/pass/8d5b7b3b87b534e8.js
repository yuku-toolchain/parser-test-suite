let f = async function* F(x, y) {};
let g = async function* (x, y) {};
assertToStringOrNativeFunction(f, "async  function  *  F  (  x  ,  y  )  {  ;  ;  }");
assertToStringOrNativeFunction(g, "async  function  *  (  x  ,  y  )  {  ;  ;  }");