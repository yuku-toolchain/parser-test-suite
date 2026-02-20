let x = "h";
class F {
  get f() {}
}
class G {
  get ["g"]() {}
}
class H {
  get [x]() {}
}
let f = Object.getOwnPropertyDescriptor(F.prototype, "f").get;
let g = Object.getOwnPropertyDescriptor(G.prototype, "g").get;
let h = Object.getOwnPropertyDescriptor(H.prototype, "h").get;
assertToStringOrNativeFunction(f, "get  f  (  )  {  }");
assertToStringOrNativeFunction(g, "get  [  \"g\"  ]  (  )  {  }");
assertToStringOrNativeFunction(h, "get  [  x  ]  (  )  {  }");