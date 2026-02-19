let x = "h";
let f = Object.getOwnPropertyDescriptor(class {
  static get f() {}
}, "f").get;
let g = Object.getOwnPropertyDescriptor(class {
  static get ["g"]() {}
}, "g").get;
let h = Object.getOwnPropertyDescriptor(class {
  static get [x]() {}
}, "h").get;
assertToStringOrNativeFunction(f, "get  f  (  )  {  }");
assertToStringOrNativeFunction(g, "get  [  \"g\"  ]  (  )  {  }");
assertToStringOrNativeFunction(h, "get  [  x  ]  (  )  {  }");