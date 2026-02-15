let x = "h";
let f = ({
  *f() {}
}).f;
let g = ({
  *["g"]() {}
}).g;
let h = ({
  *[x]() {}
}).h;
assertToStringOrNativeFunction(f, "*  f  (  )  {  }");
assertToStringOrNativeFunction(g, "*  [  \"g\"  ]  (  )  {  }");
assertToStringOrNativeFunction(h, "*  [  x  ]  (  )  {  }");