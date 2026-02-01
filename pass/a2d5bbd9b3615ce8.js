let f = async (a, b) => {};
let g = async () => 0;
let h = async a => 0;
assertToStringOrNativeFunction(f, "async  (  a  ,  b  )  =>  {  ;  }");
assertToStringOrNativeFunction(g, "async  (  )  =>  0");
assertToStringOrNativeFunction(h, "async  a  =>  0");