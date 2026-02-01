let x = "h";
let f = (class {
  f() {}
}).prototype.f;
let g = (class {
  ["g"]() {}
}).prototype.g;
let h = (class {
  [x]() {}
}).prototype.h;
assertToStringOrNativeFunction(f, "f  (  )  {  }");
assertToStringOrNativeFunction(g, "[  \"g\"  ]  (  )  {  }");
assertToStringOrNativeFunction(h, "[  x  ]  (  )  {  }");