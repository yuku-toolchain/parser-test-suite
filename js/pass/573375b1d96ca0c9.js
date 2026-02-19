let x = "h";
let f = ({
  async *f() {}
}).f;
let g = ({
  async *["g"]() {}
}).g;
let h = ({
  async *[x]() {}
}).h;
assertToStringOrNativeFunction(f, "async  *  f  (  )  {  }");
assertToStringOrNativeFunction(g, "async  *  [  \"g\"  ]  (  )  {  }");
assertToStringOrNativeFunction(h, "async  *  [  x  ]  (  )  {  }");