let x = "h";
let f = Object.getOwnPropertyDescriptor({
  get f() {}
}, "f").get;
let g = Object.getOwnPropertyDescriptor({
  get ["g"]() {}
}, "g").get;
let h = Object.getOwnPropertyDescriptor({
  get [x]() {}
}, "h").get;
assertToStringOrNativeFunction(f, "get  f  (  )  {  }");
assertToStringOrNativeFunction(g, "get  [  \"g\"  ]  (  )  {  }");
assertToStringOrNativeFunction(h, "get  [  x  ]  (  )  {  }");