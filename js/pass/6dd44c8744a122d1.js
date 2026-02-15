let x = "h";
let f = (class {
  static async *f() {}
}).f;
let g = (class {
  static async *["g"]() {}
}).g;
let h = (class {
  static async *[x]() {}
}).h;
assertToStringOrNativeFunction(f, "async  *  f  (  )  {  }");
assertToStringOrNativeFunction(g, "async  *  [  \"g\"  ]  (  )  {  }");
assertToStringOrNativeFunction(h, "async  *  [  x  ]  (  )  {  }");