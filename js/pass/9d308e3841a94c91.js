let x = "h";
let f = Object.getOwnPropertyDescriptor((class {
  get f() {}
}).prototype, "f").get;
let g = Object.getOwnPropertyDescriptor((class {
  get ["g"]() {}
}).prototype, "g").get;
let h = Object.getOwnPropertyDescriptor((class {
  get [x]() {}
}).prototype, "h").get;
assertToStringOrNativeFunction(f, "get  f  (  )  {  }");
assertToStringOrNativeFunction(g, "get  [  \"g\"  ]  (  )  {  }");
assertToStringOrNativeFunction(h, "get  [  x  ]  (  )  {  }");