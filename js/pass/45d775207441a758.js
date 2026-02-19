let x = "h";
let f = (class {
  async *f() {}
}).prototype.f;
let g = (class {
  async *["g"]() {}
}).prototype.g;
let h = (class {
  async *[x]() {}
}).prototype.h;
assertToStringOrNativeFunction(f, "async  *  f  (  )  {  }");
assertToStringOrNativeFunction(g, "async  *  [  \"g\"  ]  (  )  {  }");
assertToStringOrNativeFunction(h, "async  *  [  x  ]  (  )  {  }");