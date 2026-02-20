let f = (a, b) => {};
let g = () => 0;
let h = a => 0;
assertToStringOrNativeFunction(f, "(  a  ,  b  )  =>  {  ;  }");
assertToStringOrNativeFunction(g, "(  )  =>  0");
assertToStringOrNativeFunction(h, "a  =>  0");