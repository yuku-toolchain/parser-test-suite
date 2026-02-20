let x = "h";
let f = (class {
  static f() {}
}).f;
let g = (class {
  static ["g"]() {}
}).g;
let h = (class {
  static [x]() {}
}).h;
assertToStringOrNativeFunction(f, "f  (  )  {  }");
assertToStringOrNativeFunction(g, "[  \"g\"  ]  (  )  {  }");
assertToStringOrNativeFunction(h, "[  x  ]  (  )  {  }");