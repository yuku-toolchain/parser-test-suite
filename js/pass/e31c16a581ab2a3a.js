let x = "h";
class F {
  static get f() {}
}
class G {
  static get ["g"]() {}
}
class H {
  static get [x]() {}
}
let f = Object.getOwnPropertyDescriptor(F, "f").get;
let g = Object.getOwnPropertyDescriptor(G, "g").get;
let h = Object.getOwnPropertyDescriptor(H, "h").get;
assertToStringOrNativeFunction(f, "get  f  (  )  {  }");
assertToStringOrNativeFunction(g, "get  [  \"g\"  ]  (  )  {  }");
assertToStringOrNativeFunction(h, "get  [  x  ]  (  )  {  }");