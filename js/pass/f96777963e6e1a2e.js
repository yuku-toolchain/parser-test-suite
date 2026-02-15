let x = "h";
class F {
  static async f() {}
}
class G {
  static async ["g"]() {}
}
class H {
  static async [x]() {}
}
let f = F.f;
let g = G.g;
let h = H.h;
assertToStringOrNativeFunction(f, "async f  (  )  {  }");
assertToStringOrNativeFunction(g, "async  [  \"g\"  ]  (  )  {  }");
assertToStringOrNativeFunction(h, "async  [  x  ]  (  )  {  }");